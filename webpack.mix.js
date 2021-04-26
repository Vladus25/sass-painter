let mix = require("laravel-mix");
mix.options({
    // Don't perform any css url rewriting by default
    processCssUrls: false,
})

mix.js("src/script.js", "dist").sass("src/style.scss", "").setPublicPath("dist").options({processCssUrls: false,}).copy('src/index.html', 'dist');
