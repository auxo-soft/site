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

gulp.task('script-inject', function () {
 // var target = gulp.src('./resources/views/layouts/app.blade.php');
 // // It's not necessary to read the files (will speed up things), we're only after their paths:
 // var sources = gulp.src(['./public/angular/**/*.js'], {read: false});
 //
 // return target.pipe(inject(sources),{relative: true})
 //   .pipe(gulp.dest('./resources/views/layouts/'));

 gulp.src('./resources/views/layouts/app.blade.php')
  .pipe(inject(gulp.src('./public/angular/**/*.js', {read: false}), {ignorePath: 'public'}))
  .pipe(gulp.dest('./resources/views/layouts/'));
});

 elixir(function(mix) {

     // Workflow stuff
     mix.sass('app.scss')
         .version(['js/app.js', 'css/app.css'])
         .wiredep()
         .task('script-inject');

     // Build stuff
     if (elixir.config.production) {
         mix.useref()
             .version(['js/app.js', 'css/app.css']);
     }

 });
