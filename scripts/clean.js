const del = require( 'del' );

const CONFIG = require( './config' );

function resolveCleanPaths() {
  const taskPath = CONFIG.tasks.clean.dest;
  if ( !taskPath || !taskPath.length ) {
    return [ `${CONFIG.root.dest}/**/*` ];
  }

  return taskPath;
}

const cleanPaths = resolveCleanPaths();
const cleanDot = CONFIG.tasks.clean.cleanDot;

del( cleanPaths, { dot: cleanDot });
