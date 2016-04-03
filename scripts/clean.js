const del = require( 'del' );

const CONFIG = require( './config' );

function resolvePathsToClean() {
  const taskPath = CONFIG.tasks.clean.dest;
  if ( !taskPath || !taskPath.length ) {
    return [ `${ CONFIG.root.dest }/**/*` ];
  }

  return taskPath;
}

const pathsToClean = resolvePathsToClean();
const dot = CONFIG.tasks.clean.dot;

del( pathsToClean, { dot });
