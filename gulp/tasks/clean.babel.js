/*

 Gulp.js `clean` task to prepare the new build.

*/

import gulp from 'gulp';
import del from 'del';

import CONFIG from '../path.babel.js';

gulp.task( 'clean', () => {
	return del( [ `${CONFIG.root.dest}` ] );
});
