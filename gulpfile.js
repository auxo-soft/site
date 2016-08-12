var elixir = require('laravel-elixir');
require('laravel-elixir-wiredep');
require('laravel-elixir-useref');
var gulp = require('gulp');
var inject = require('gulp-inject');

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

 gulp.task('index', function () {
   var target = gulp.src('./resources/views/layouts/app.blade.php');
   // It's not necessary to read the files (will speed up things), we're only after their paths:
   var sources = gulp.src(['./angular/**/*.js'], {read: false});

   return target.pipe(inject(sources))
     .pipe(gulp.dest('./resources/views/layouts/'));
 });
