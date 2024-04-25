const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .saas('resources/saas/app.scss', 'public/css')
    .sourceMaps();
