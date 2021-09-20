let mix = require('laravel-mix');
require('mix-html-builder');

mix.js('src/index.js', 'dist')
    .react({ extractStyles: true })
    .sass('src/scss/app.scss', '/', {
        sassOptions: {
            additionalData: 'src/scss/core/wanted.scss',
        }
    })
    .options({
        processCssUrls: false,
    })
    .sourceMaps()
    .setPublicPath('dist')

mix.html({
    htmlRoot: './layouts/*.html',
    output: './pages',
    partialRoot: './layouts/'
})

