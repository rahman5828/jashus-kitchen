(function () {
  "use strict";

  function boot() {
    if (typeof MENU === "undefined" || typeof CONFIG === "undefined") {
      console.error("Jashu content not loaded");
      return;
    }

    var $ = function (s) { return document.querySelector(s); };
    var $$ = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };
    function esc(s) {
      return String(s)
        .replace(/&/g, "&")
        .replace(/</g, "<")
        .replace(/>/g, ">")
        .replace(/"/g, """);
    }
    var rm = matchMedia("(prefers-reduced-motion: reduce)").matches;

    function fill(el, src, alt, eager) {
      if (!el || !src) return;
      el.classList.remove("has");
      el.innerHTML = "";
      var im = new Image();
      im.alt = alt || "";
      im.decoding = "async";
      im.referrerPolicy = "no-referrer";
      im.loading = eager ? "eager" : "lazy";
      im.onload = function () {
        el.classList.add("has");
        el.appendChild(im);
      };
      im.src = src;
    }

    function fillAll() {
      $$("[data-img]").forEach(function (el) {
        var key = el.dataset.img;
        if (typeof IMAGES !== "undefined" && IMAGES[key]) {
          var eager = key === "hero" || key === "d1" || key === "band";
          fill(el, IMAGES[key], "", eager);
        }
      });
    }

    var chs = $("#chs");
    if (chs && typeof CHAPTERS !== "undefined") {
      chs.innerHTML = CHAPTERS.map(function (c, i) {
        return '<div class="ch"><div class="n">0' + (i + 1) + '</div><div class="tx rv"><h3>' +
          esc(c[0]) + '</h3><p>' + esc(c[1]) + '</p></div><div class="ph zoom rv" data-img="c' +
          (i + 1) + '" style="--h:' + (20 + i * 5) + '"></div></div>';
      }).join("");
    }

    fillAll();

    if (CONFIG.phone) {
      var t = "tel:" + CONFIG.phone;
      ["#callRow", "#callOpt", "#callBar"].forEach(function (s) {
        var a = $(s);
        if (!a) return;
        a.href = t;
        a.hidden = false;
        a.removeAttribute("aria-disabled");
        a.classList.remove("off");
      });
    }

    var cat = "All";
    var term = "";
    var cats = ["All"].concat(Array.from(new Set(MENU.map(function (m) { return m.category; }))));

    function draw() {
      var chipsEl = $("#chips");
      var gridEl = $("#grid");
      if (!chipsEl || !gridEl) return;

      chipsEl.innerHTML = cats.map(function (c) {
        var n = c === "All" ? MENU.length : MENU.filter(function (m) { return m.category === c; }).length;
        return '<button type="button" class="chip" aria-pressed="' + (c === cat) + '" data-c="' +
          esc(c) + '">' + esc(c) + '<sup>' + n + '</sup></button>';
      }).join("");

      var list = MENU.map(function (m, i) { return [m, i]; }).filter(function (pair) {
        var m = pair[0];
        var hay = (m.name + " " + m.description + " " + (m.status || "")).toLowerCase();
        return (cat === "All" || m.category === cat) && hay.indexOf(term) !== -1;
      });

      if (!list.length) {
        gridEl.innerHTML = '<p class="empty">No dishes match.</p>';
        return;
      }

      gridEl.innerHTML = list.map(function (pair) {
        var m = pair[0], i = pair[1];
        var tags = (m.tags && m.tags.length)
          ? '<span class="tg">' + m.tags.map(function (t) { return '<i>' + esc(t) + '</i>'; }).join("") + '</span>'
          : "";
        var st = m.status ? '<span class="st">' + esc(m.status) + '</span>' : "";
        return '<button type="button" class="card" data-i="' + i + '">' +
          '<span class="fr zoom">' +
          '<span class="c">' + esc(m.category) + '</span>' +
          '<span class="ph" data-m="' + i + '" style="--h:' + (20 + (i * 7) % 20) + '"></span>' +
          '<span class="pr">' + esc(m.price) + '</span>' + st +
          '<span class="vw">View</span></span>' +
          '<h3>' + esc(m.name) + '</h3><p>' + esc(m.description) + '</p>' + tags +
          '</button>';
      }).join("");

      $$("[data-m]").forEach(function (el) {
        var item = MENU[el.dataset.m];
        if (item) fill(el, item.image, item.name);
      });
    }

    var chipsRoot = $("#chips");
    if (chipsRoot) {
      chipsRoot.onclick = function (e) {
        var b = e.target.closest(".chip");
        if (b) { cat = b.dataset.c; draw(); }
      };
    }

    var q = $("#q");
    if (q) {
      q.oninput = function (e) {
        term = e.target.value.toLowerCase().trim();
        draw();
      };
    }

    $$(".tile[data-cat]").forEach(function (t) {
      t.addEventListener("click", function () {
        cat = t.dataset.cat;
        draw();
      });
    });

    var gridRoot = $("#grid");
    if (gridRoot) {
      gridRoot.onclick = function (e) {
        var c = e.target.closest(".card");
        if (!c) return;
        var m = MENU[c.dataset.i];
        if (!m) return;
        $("#dc").textContent = m.category;
        $("#dt").textContent = m.name;
        $("#dd").textContent = m.description;
        $("#dp").textContent = [m.price, m.status].filter(Boolean).join(" · ");
        fill($("#di"), m.image, m.name, true);
        $("#dlg").showModal();
      };
    }

    var dx = $("#dx");
    if (dx) dx.onclick = function () { $("#dlg").close(); };
    var dlg = $("#dlg");
    if (dlg) {
      dlg.onclick = function (e) {
        if (e.target.id === "dlg") e.target.close();
      };
    }

    draw();

    var subGrid = $("#subGrid");
    if (subGrid && typeof SUBSCRIPTION !== "undefined") {
      subGrid.innerHTML = SUBSCRIPTION.map(function (s, i) {
        var tags = (s.tags || []).map(function (t) { return '<i>' + esc(t) + '</i>'; }).join("");
        return '<article class="sub-card rv">' +
          '<div class="ph" data-sub="' + i + '" style="--h:' + (22 + i * 6) + '"></div>' +
          '<div class="sub-body">' +
          '<span class="eb">' + esc(s.name) + '</span>' +
          '<h3>' + esc(s.price) + '</h3>' +
          '<small>' + esc(s.period) + '</small>' +
          '<p>' + esc(s.desc) + '</p>' +
          '<div class="tg">' + tags + '</div>' +
          '<a class="pill f" href="https://wa.me/916385153008?text=' +
          encodeURIComponent("Hi, I'd like the " + s.name + " plan") +
          '" target="_blank" rel="noopener">Subscribe on WhatsApp</a>' +
          '</div></article>';
      }).join("");
      $$("[data-sub]").forEach(function (el) {
        var s = SUBSCRIPTION[el.dataset.sub];
        if (s) fill(el, s.image, s.name);
      });
    }

    var ov = $("#ov");
    var mb = $("#mb");
    function nav(open) {
      if (!ov || !mb) return;
      ov.classList.toggle("on", open);
      mb.setAttribute("aria-expanded", open);
      document.body.style.overflow = open ? "hidden" : "";
    }
    if (mb) mb.onclick = function () { nav(true); };
    var cl = $("#cl");
    if (cl) cl.onclick = function () { nav(false); };
    if (ov) {
      ov.onclick = function (e) {
        if (e.target.closest("a.big")) nav(false);
      };
    }
    addEventListener("keydown", function (e) {
      if (e.key === "Escape" && ov && ov.classList.contains("on")) nav(false);
    });

    var hd = $("#hd");
    var parallax = $$("[data-p]");
    function onScroll() {
      if (hd) hd.classList.toggle("s", scrollY > innerHeight * 0.5);
      if (!rm) {
        parallax.forEach(function (el) {
          var r = el.parentElement.getBoundingClientRect();
          if (r.bottom > 0 && r.top < innerHeight) {
            el.style.transform = "translateY(" + ((r.top + r.height / 2 - innerHeight / 2) * -0.08) + "px)";
          }
        });
      }
    }
    addEventListener("scroll", function () { requestAnimationFrame(onScroll); }, { passive: true });
    onScroll();

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (x) {
        if (x.isIntersecting) {
          x.target.classList.add("in");
          io.unobserve(x.target);
        }
      });
    }, { threshold: 0.12 });
    $$(".rv").forEach(function (el) { io.observe(el); });

    if (!rm && matchMedia("(pointer: fine)").matches) {
      var cur = $(".cur");
      if (cur) {
        addEventListener("pointermove", function (e) {
          cur.style.opacity = 1;
          cur.style.transform = "translate(" + e.clientX + "px, " + e.clientY + "px)";
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
