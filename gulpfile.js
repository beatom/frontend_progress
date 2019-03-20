/**
 * Created by rusanov on 17.07.17.
 */

var gulp           = require('gulp'),
    sass           = require('gulp-sass'),
    browserSync    = require('browser-sync'),
    concat         = require('gulp-concat'),
    uglify         = require('gulp-uglify'),
    cleanCSS       = require('gulp-clean-css'),
    rename         = require('gulp-rename'),
    del            = require('del'),
    imagemin       = require('gulp-imagemin'),
    pngquant       = require('imagemin-pngquant'),
    cache          = require('gulp-cache'),
    autoprefixer   = require('gulp-autoprefixer'),
    ftp            = require('vinyl-ftp'),
    notify         = require('gulp-notify'),
    fileinclude    = require('gulp-file-include'),
    babel          = require('gulp-babel'),
    gulpRemoveHtml = require('gulp-remove-html'),
    pug            = require('gulp-pug');

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'public'
        },
        notify: false
    });
});

gulp.task('sass', function(){
    return gulp.src([
            'src/styles/**/*.scss',
            '!src/styles/components/*.scss',
            '!src/styles/templates.scss',
            '!src/styles/colors.scss',
            '!src/styles/sizes.scss',
            '!src/styles/screens.scss'
        ])
        .pipe(sass().on(('error'), notify.onError()))
        .pipe(rename({suffix: '.min'}))
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(cleanCSS())
        .pipe(gulp.dest('public/styles'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function() {
    return gulp.src('src/scripts/**/*')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('public/scripts'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('libs', function() {
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/jquery-circle-progress/dist/circle-progress.js',
        'node_modules/sticky-kit/dist/sticky-kit.min.js'
        // other libs
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/scripts'));
});

gulp.task('watch', ['buildhtml', 'sass', 'js', 'libs',  'imagemin'], function(){
    gulp.watch('src/styles/**/*.scss', ['sass']);
    gulp.watch([
        'src/templates/pages/*.pug',
        'src/templates/layout.pug',
        'src/templates/components/*.pug'
    ], ['buildhtml']);
    gulp.watch('src/scripts/**/*.js', ['js']);
    gulp.watch('assets/img/**/*', ['imagemin']);
});

gulp.task('imagemin', function() {
    return gulp.src('assets/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('public/img'));
});

gulp.task('buildhtml', function() {
    gulp.src([
            'src/templates/pages/*.pug',
            '!src/templates/components/*.pug',
            '!src/templates/layout.pug'
        ])
        .pipe(pug({}))
        .pipe(fileinclude({
            prefix: '@@'
        }))
        .pipe(gulpRemoveHtml())
        .pipe(gulp.dest('public'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('build', ['buildhtml', 'imagemin', 'sass', 'js', 'libs', 'browser-sync'], function() {
    var buildCss = gulp.src([
        'src/styles/main.min.css'
    ]).pipe(gulp.dest('public/styles'));

    var buildFonts = gulp.src('assets/fonts/**/*')
        .pipe(gulp.dest('assets/fonts'));
});

gulp.task('cleancache', function() {
    return cache.clearAll();
});

gulp.task('default', ['watch']);

