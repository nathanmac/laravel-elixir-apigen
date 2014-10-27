var elixir = require('laravel-elixir');
var gulp = require('gulp');
var apigen = require('gulp-apigen');
var notify = require('gulp-notify');
var _ = require('underscore');

/*
 |----------------------------------------------------------------
 | ApiGen Documentation Generator
 |----------------------------------------------------------------
 |
 | This task will trigger your ApiGen documentation to be
 | generated.
 |
 */

elixir.extend('apigen', function(baseDir, options) {

    options = _.extend({
        clear: true, notify: true
    }, options);

    gulp.task('apigen', function() {
       gulp.src('')
           .pipe(apigen('', options))
           .pipe(notify({
               title: 'Complete!',
               message: 'Your ApiGen documentation has been generated!',
               icon: __dirname + '/../laravel-elixir/icons/pass.png'
           }));
    });

    this.queueTask('apigen');

});
