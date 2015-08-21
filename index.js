var gulp   = require('gulp');
var apigen = require('gulp-apigen');
var elixir = require('laravel-elixir');
var config = elixir.config;

/*
 |----------------------------------------------------------------
 | ApiGen Documentation Generator
 |----------------------------------------------------------------
 |
 | This task will trigger your ApiGen documentation to be
 | generated.
 |
 */

elixir.extend('apigen', function(bin, options) {

    options = _.extend({
        clear: true, notify: true
    }, options);

    new elixir.Task('apigen', function () {
       gulp.src('')
           .pipe(apigen(bin, options))
           .pipe(new elixir.Notification('ApiGen Complete!'));
    });

});
