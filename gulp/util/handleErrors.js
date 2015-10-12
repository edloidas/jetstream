import notify from 'gulp-notify';

export default ( errorObject, callback ) => {
	let self = this || global;
	notify.onError( errorObject.toString().split( ': ' ).join( ':\n' ) ).apply( self, arguments );
	// Keep gulp from hanging on this task
	if ( self && typeof self.emit === 'function' ) global.emit( 'end' );
};
