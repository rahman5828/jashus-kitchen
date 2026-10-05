# Jashu's Kitchen website

Static site (HTML, CSS, JS). No build step, no dependencies.

```
index.html          page structure
css/styles.css      all styling + 5 colour palettes
js/content.js       EDIT THIS: phone, palette, photos, menu, story text
js/main.js          behaviour (menu, nav, motion, palette picker)
assets/images/      drop photos here
```

## Add the real content
- **Photos:** save JPGs in `assets/images/` using the slot names: `hero.jpg`, `d1.jpg`, `t1`-`t6`, `band`, `g1`-`g5` (Instagram collage), `c1`-`c4` (story), and `menu-01.jpg`-`menu-08.jpg`. Missing files show the styled placeholder. Use your own photos; export them from your Instagram account or phone. Keep each under ~300 KB (about 1600 px wide).
- **Phone:** set `CONFIG.phone` in `js/content.js` (`"+91..."`). All Call buttons turn on.
- **Menu:** edit `MENU` in `js/content.js` (name, description, price, category; optional status, tags).
- **Story:** edit `CHAPTERS`.
- **Address and hours:** edit the bracketed text in the Find us section of `index.html`.
- **Palette:** set `CONFIG.palette` (`ivory`, `terracotta`, `forest`, `midnight`, `oxblood`). Set `paletteSwitcher:false` before launch.

## Deploy on GitHub Pages
1. Push to a repo with branch `main`.
2. Settings > Pages > Source: **GitHub Actions**. The included workflow deploys on every push.

Online ordering is not built. Orders go through phone and Instagram.
