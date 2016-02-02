var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var vinylSourceStream = require('vinyl-source-stream');
var vinylBuffer = require('vinyl-buffer');
var plugins = require('gulp-load-plugins')();

var src = {
    html: 'src/**/*.html',
    libs: 'src/libs/**/*.min.*',
    scripts: {
        all: 'src/scripts/**/*.js',
        app: 'src/scripts/app.js'
    }
};

var build = 'build/';
var out = {
    libs: build + 'libs/',
    scripts: {
        file: 'app.min.js',
        folder: build + 'scripts/'
    }
};

/* Compile all script files into one output minified JS file. */
gulp.task('scripts', ['jshint'], function() {

    var sources = browserify({
        entries: src.scripts.app,
        debug: true // Build source maps
    })
        .transform(babelify.configure({
            // You can configure babel here!
            // https://babeljs.io/docs/usage/options/
        }));

    return sources.bundle()
        .pipe(vinylSourceStream(out.scripts.file))
        .pipe(vinylBuffer())
        .pipe(plugins.sourcemaps.init({
            loadMaps: true // Load the sourcemaps browserify already generated
        }))
        .pipe(plugins.ngAnnotate())
        .pipe(plugins.uglify())
        .pipe(plugins.sourcemaps.write('./', {
            includeContent: true
        }))
        .pipe(gulp.dest(out.scripts.folder))
        .pipe(plugins.connect.reload());
});
