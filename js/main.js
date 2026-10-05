(function () {
  "use strict";

  function boot() {
    if (typeof MENU === "undefined" || typeof CONFIG === "undefined") {
      console.error("Jashu content not loaded");
      return;
    }

    const $ = s => document.querySelector(s);
    const $$ = s => [...document.querySelectorAll(s)];
    const esc = s =>
      String(s)
        .replace(/&/g, "&")
        .replace(/</g, "<")
        .replace(/>/g, ">")
        .replace(/"/g, """);
    const rm = matchMedia("(prefers-reduced-motion: reduce)").matches;

    function fill(el, src, alt, eager) {
      if (!el || !src) return;
      el.classList.remove("has");
      el.innerHTML = "";
      const im = new Image();
      im.alt = alt || "";
      im.decoding = "async";
      im.referrerPolicy = "no-referrer";
      if (eager) im.loading = "eager";
      else im.loading = "lazy";
      im.onload = () => {
        el.classList.add("has");
        el.append(im);
      };
      im.onerror = () => {
        /* keep placeholder if image fails */
      };
      im.src = src;
    }

    function fillAll() {
      $$("[data-img]").forEach(el => {
        const key = el.dataset.img;
        if (typeof IMAGES !== "undefined" && IMAGES[key]) {
          const eager = key === "hero" || key === "d1" || key === "band";
          fill(el, IMAGES[key], "", eager);
        }
      });
    }

    /* Story */
    const chs = $("#chs");
    if (chs && typeof CHAPTERS !== "undefined") {
      chs.innerHTML = CHAPTERS.map(
        (c, i) =>
          `<div class="ch"><div class="n">0${i + 1}</div><div class="tx rv"><h3>${esc(c[0])}</h3><p>${esc(c[1])}</p></div><div class="ph zoom rv" data-img="c${i + 1}" style="--h:${20 + i * 5}"></div></div>`
      ).join("");
    }

    fillAll();

    if (CONFIG.phone) {
      const t = "tel:" + CONFIG.phone;
      ["#callRow", "#callOpt", "#callBar"].forEach(s => {
        const a = $(s);
        if (!a) return;
        a.href = t;
        a.hidden = false;
        a.removeAttribute("aria-disabled");
        a.classList.remove("off");
      });
    }

    let cat = "All";
    let term = "";
    const cats = ["All", ...new Set(MENU.map(m => m.category))];

    function draw() {
      const chipsEl = $("#chips");
      const gridEl = $("#grid");
      if (!chipsEl || !gridEl) return;

      chipsEl.innerHTML = cats
        .map(
          c =>
            `<button type="button" class="chip" aria-pressed="${c === cat}" data-c="${esc(c)}">${esc(c)}<sup>${
              c === "All" ? MENU.length : MENU.filter(m => m.category === c).length
            }</sup></button>`
        )
        .join("");

      const list = MENU.map((m, i) => [m, i]).filter(([m]) => {
        const hay = (m.name + " " + m.description + " " + (m.status || "")).toLowerCase();
        return (cat === "All" || m.category === cat) && hay.includes(term);
      });

      if (!list.length) {
        gridEl.innerHTML = `<p class="empty">No dishes match “${esc(term)}”.</p>`;
        return;
      }

      gridEl.innerHTML = list
        .map(
          ([m, i]) => `
        <button type="button" class="card" data-i="${i}">
          <span class="fr zoom">
            <span class="c">${esc(m.category)}</span>
            <span class="ph" data-m="${i}" style="--h:${20 + (i * 7) % 20}"></span>
            <span class="pr">${esc(m.price)}</span>
            ${m.status ? `<span class="st">${esc(m.status)}</span>` : ""}
            <span class="vw">View</span>
          </span>
          <h3>${esc(m.name)}</h3>
          <p>${esc(m.description)}</p>
          ${m.tags && m.tags.length ? `<span class="tg">${m.tags.map(t => `<i>${esc(t)}</i>`).join("")}</span>` : ""}
        </button>`
        )
        .join("");

      $$("[data-m]").forEach(el => {
        const item = MENU[el.dataset.m];
        if (item) fill(el, item.image, item.name);
      });
    }

    const chipsRoot = $("#chips");
    if (chipsRoot) {
      chipsRoot.onclick = e => {
        const b = e.target.closest(".chip");
        if (b) {
          cat = b.dataset.c;
          draw();
        }
      };
    }

    const q = $("#q");
    if (q) {
      q.oninput = e => {
        term = e.target.value.toLowerCase().trim();
        draw();
      };
    }

    $$(".tile[data-cat]").forEach(t => {
      t.addEventListener("click", () => {
        cat = t.dataset.cat;
        draw();
      });
    });

    const gridRoot = $("#grid");
    if (gridRoot) {
      gridRoot.onclick = e => {
        const c = e.target.closest(".card");
        if (!c) return;
        const m = MENU[c.dataset.i];
        if (!m) return;
        $("#dc").textContent = m.category;
        $("#dt").textContent = m.name;
        $("#dd").textContent = m.description;
        $("#dp").textContent = [m.price, m.status].filter(Boolean).join(" · ");
        fill($("#di"), m.image, m.name, true);
        $("#dlg").showModal();
      };
    }

    const dx = $("#dx");
    if (dx) dx.onclick = () => $("#dlg").close();
    const dlg = $("#dlg");
    if (dlg) {
      dlg.onclick = e => {
        if (e.target.id === "dlg") e.target.close();
      };
    }

    draw();

    /* Subscriptions */
    const subGrid = $("#subGrid");
    if (subGrid && typeof SUBSCRIPTION !== "undefined") {
      subGrid.innerHTML = SUBSCRIPTION.map(
        (s, i) => `
        <article class="sub-card rv">
          <div class="ph" data-sub="${i}" style="--h:${22 + i * 6}"></div>
          <div class="sub-body">
            <span class="eb">${esc(s.name)}</span>
            <h3>${esc(s.price)}</h3>
            <small>${esc(s.period)}</small>
            <p>${esc(s.desc)}</p>
            <div class="tg">${(s.tags || []).map(t => `<i>${esc(t)}</i>`).join("")}</div>
            <a class="pill f" href="https://wa.me/916385153008?text=${encodeURIComponent("Hi, I'd like the " + s.name + " plan")}" target="_blank" rel="noopener">Subscribe on WhatsApp</a>
          </div>
        </article>`
      ).join("");
      $$("[data-sub]").forEach(el => {
        const s = SUBSCRIPTION[el.dataset.sub];
        if (s) fill(el, s.image, s.name);
      });
    }

    /* Nav */
    const ov = $("#ov");
    const mb = $("#mb");
    function nav(open) {
      if (!ov || !mb) return;
      ov.classList.toggle("on", open);
      mb.setAttribute("aria-expanded", open);
      document.body.style.overflow = open ? "hidden" : "";
    }
    if (mb) mb.onclick = () => nav(true);
    const cl = $("#cl");
    if (cl) cl.onclick = () => nav(false);
    if (ov) {
      ov.onclick = e => {
        if (e.target.closest("a.big")) nav(false);
      };
    }
    addEventListener("keydown", e => {
      if (e.key === "Escape" && ov && ov.classList.contains("on")) nav(false);
    });

    /* Header */
    const hd = $("#hd");
    const parallax = $$("[data-p]");
    function onScroll() {
      if (hd) hd.classList.toggle("s", scrollY > innerHeight * 0.5);
      if (!rm) {
        parallax.forEach(el => {
          const r = el.parentElement.getBoundingClientRect();
          if (r.bottom > 0 && r.top < innerHeight) {
            el.style.transform = `translateY(${(r.top + r.height / 2 - innerHeight / 2) * -0.08}px)`;
          }
        });
      }
    }
    addEventListener("scroll", () => requestAnimationFrame(onScroll), { passive: true });
    onScroll();

    /* Reveal */
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(x => {
          if (x.isIntersecting) {
            x.target.classList.add("in");
            io.unobserve(x.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    $$(".rv").forEach(el => io.observe(el));

    /* Cursor */
    if (!rm && matchMedia("(pointer: fine)").matches) {
      const cur = $(".cur");
      if (cur) {
        addEventListener("pointermove", e => {
          cur.style.opacity = 1;
          cur.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
          cur.classList.toggle("big", !!e.target.closest("a, button"));
        });
      }
    }

    document.documentElement.dataset.palette = CONFIG.palette || "ivory";
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
