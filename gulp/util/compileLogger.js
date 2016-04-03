import gulpUtil from 'gulp-util';
import prettifyTime from './prettifyTime';
import handleErrors from './handleErrors';

const colors = gulpUtil.colors;

export default ( err, stats ) => {
  if ( err ) throw new gulpUtil.PluginError( 'webpack', err );

  let statColor = stats.compilation.warnings.length < 1 ? 'green' : 'yellow';

  if ( stats.compilation.errors.length > 0 ) {
    stats.compilation.errors.forEach( error => {
      handleErrors( error );
      statColor = 'red';
    });
  } else {
    const compileTime = prettifyTime( stats.endTime - stats.startTime );
    gulpUtil.log( colors[ statColor ]( stats ));
    gulpUtil.log( 'Compiled with', colors.cyan( 'webpack' ), 'in', colors.magenta( compileTime ));
  }
};

export function commonError( callback, err ) {
  handleErrors( `Error in plugin [${ err.plugin || 'gulp-postcss' }]` );
  gulpUtil.log( colors.red( err.message ));
  if ( err.stack ) {
    gulpUtil.log( colors.red( err.stack ));
  }
  return callback();
}
