import gulp from 'gulp';
import del from 'del';

import CONFIG from '../config';

function resolvePathsToClean() {
  if ( !CONFIG.tasks.clean.dest ) {
    return [ `${ CONFIG.root.dest }/**/*` ];
  }

  return CONFIG.tasks.clean.dest;
}

gulp.task( 'clean', cb => {
  const pathsToClean = resolvePathsToClean();
  const dot = CONFIG.tasks.clean.dot;

  return del( pathsToClean, { dot }, cb );
});
