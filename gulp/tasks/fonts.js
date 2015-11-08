import CONFIG from '../config';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import changed from 'gulp-changed';
import path from 'path';

const paths = {
  src: path.join( CONFIG.root.src, CONFIG.tasks.fonts.src, '/**/*' ),
  dest: path.join( CONFIG.root.dest, CONFIG.tasks.fonts.dest ),
};

gulp.task( 'fonts', () => {
  return gulp.src( paths.src )
    // Ignore unchanged files
    .pipe( changed( paths.dest ))
    .pipe( gulp.dest( paths.dest ))
    .pipe( browserSync.stream());
});
