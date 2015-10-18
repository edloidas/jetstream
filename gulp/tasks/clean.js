import gulp from 'gulp';
import del from 'del';

import CONFIG from '../config';

gulp.task( 'clean', ( cb ) => {
	return del( [ `${CONFIG.root.dest}/**/*` ], { dot: true }, cb );
});
