const del = require( 'del' );

const CONFIG = require( './config' );

function resolveCleanPaths() {
  const taskPath = CONFIG.tasks.clean.dest;
  if ( !taskPath || !taskPath.length ) {
    return [ `${CONFIG.root.dest}/**/*` ];
  }

  return taskPath;
}

( function () {
  const cleanPaths = resolveCleanPaths();
  const cleanDot = CONFIG.tasks.clean.cleanDot;

  return del( cleanPaths, { dot: cleanDot });
})();
