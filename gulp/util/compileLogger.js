import gulpUtil from 'gulp-util';
import prettifyTime from './prettifyTime';
import handleErrors from './handleErrors';

export default ( err, stats ) => {
	if ( err ) throw new gulpUtil.PluginError( 'webpack', err );

	let statColor = stats.compilation.warnings.length < 1 ? 'green' : 'yellow';

	if ( stats.compilation.errors.length > 0 ) {
		stats.compilation.errors.forEach( ( error ) => {
			handleErrors( error );
			statColor = 'red';
		});
	} else {
		const compileTime = prettifyTime( stats.endTime - stats.startTime );
		gulpUtil.log( gulpUtil.colors[ statColor ]( stats ) );
		gulpUtil.log( 'Compiled with', gulpUtil.colors.cyan( 'webpack:development' ), 'in', gulpUtil.colors.magenta( compileTime ) );
	}
};
