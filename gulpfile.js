var elixir = require('laravel-elixir');
require('laravel-elixir-wiredep');
require('laravel-elixir-useref');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

 elixir(function(mix) {

     // Workflow stuff
     mix.sass('app.scss')
         .version(['js/app.js', 'css/app.css'])
         .wiredep();

     // Build stuff
     if (elixir.config.production) {
         mix.useref()
             .version(['js/app.js', 'css/app.css']);
     }

 });
