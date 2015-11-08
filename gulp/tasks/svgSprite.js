import CONFIG from '../config';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import svgstore from 'gulp-svgstore';
import imagemin from 'gulp-imagemin';
import path from 'path';

const paths = {
  src: path.join( CONFIG.root.src, CONFIG.tasks.svgSprite.src, '/*.svg' ),
  dest: path.join( CONFIG.root.dest, CONFIG.tasks.svgSprite.dest ),
};

gulp.task( 'svgSprite', () => {
  return gulp.src( paths.src )
    // Optimize
    .pipe( imagemin())
    // Combine into one
    .pipe( svgstore())
    .pipe( gulp.dest( paths.dest ))
    .pipe( browserSync.stream());
});
