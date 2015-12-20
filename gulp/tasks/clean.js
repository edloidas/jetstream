import gulp from 'gulp';
import del from 'del';

import CONFIG from '../config';

function resolveCleanPaths() {
  if ( !CONFIG.tasks.clean.dest ) {
    return [ `${CONFIG.root.dest}/**/*` ];
  }

  return CONFIG.tasks.clean.dest;
}

gulp.task( 'clean', ( cb ) => {
  const cleanPaths = resolveCleanPaths();
  const cleanDot = CONFIG.tasks.clean.cleanDot;

  return del( cleanPaths, { dot: cleanDot }, cb );
});
