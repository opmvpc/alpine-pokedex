const mix = require("laravel-mix");

mix
  .js("src/app.js", "dist")
  .postCss("src/app.css", "dist", [require("tailwindcss")])
  .extract(["alpinejs"])
  .setPublicPath("dist")
  .browserSync({
    open: false,
    ui: false,
    proxy: "alpine-pokedex.test",
    port: 3000,
    files: ["index.html", "src/**"],
  });
