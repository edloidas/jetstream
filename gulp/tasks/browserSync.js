import CONFIG from '../config';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import path from 'path';

const settings = {
  server: {
    baseDir: path.resolve( CONFIG.root.dest, CONFIG.tasks.html.dest ),
  },
};

if ( CONFIG.tasks.html.watchOnly ) {
  settings.files = CONFIG.tasks.html.watchOnly;
}

gulp.task( 'browserSync', () => {
  return browserSync( settings );
});
