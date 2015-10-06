import gulp from 'gulp';
import del from 'del';

import CONFIG from '../path.js';

gulp.task( 'clean', () => {
	return del( [ `${CONFIG.root.dest}` ] );
});
