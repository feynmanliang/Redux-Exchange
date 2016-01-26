var gulp        = require('gulp'),
    uglify      = require('gulp-uglify'),
    htmlreplace = require('gulp-html-replace'),
    browserify  = require('browserify'),
    babelify    = require('babelify'),
    gutil       = require('gulp-util'),
    watchify    = require("watchify"),
    streamify   = require('gulp-streamify'),
    source      = require('vinyl-source-stream');

var path = {
  HTML: 'src/index.html',
  MINIFIED_OUT: 'build.min.js',
  OUT: 'build.js',
  DEST: 'dist',
  DEST_BUILD: 'dist/build',
  DEST_SRC: 'dist/src',
  ENTRY_POINT: './src/js/index.js'
};

/**
 * Dev tasks
 */
gulp.task('copy', function(){
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
});

gulp.task('watch', function() {
  gulp.watch(path.HTML, ['copy']);

  var watcher  = watchify(
    browserify({
      entries: [path.ENTRY_POINT], // automatically resolve dependent files
      transform: [babelify], // JSX and ES6 transpile
      //debug: (gutil.env.type !== 'prod'), // use source maps if not prod
      debug: true, // use source maps
      cache: {}, packageCache: {}, fullPaths: true
    })
  );
  watcher.on('update', rebundle);

  function rebundle(file) {
    if (file) {
      file.map(function (fileName) {
        gutil.log('File updated', gutil.colors.yellow(fileName));
      });
    }

    return watcher.bundle()
      .on("error", function(err) {
        gutil.log(
          gutil.colors.red("Browserify compile error:"),
          err.message
        );
        this.emit('end');
      })
      .pipe(source(path.OUT))
      .pipe(gulp.dest(path.DEST_SRC));
  }

  return rebundle();
});

/**
 * Production tasks
 */
gulp.task('build', function(){
  browserify({
    entries: [path.ENTRY_POINT],
    transform: [babelify]
  })
    .bundle()
    .pipe(source(path.MINIFIED_OUT))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('replaceHTML', function(){
  gulp.src(path.HTML)
    .pipe(htmlreplace({
      'js': 'build/' + path.MINIFIED_OUT
    }))
    .pipe(gulp.dest(path.DEST));
});

gulp.task('production', ['replaceHTML', 'build']);
gulp.task('default', ['copy', 'watch']);
