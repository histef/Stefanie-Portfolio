const gulp = require('gulp'),
      browserSync = require('browser-sync').create(),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      imagemin = require('gulp-imagemin');

// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
    return gulp.src(['./scss/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});

gulp.task('image', function(){
    gulp.src('./img/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./img'));
})

// Watch Sass & Serve
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: {
          baseDir: './'
        },
        ui: false,
        // online: false;
    });


    gulp.watch(['./scss/*.scss'], ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['serve']);