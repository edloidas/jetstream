import gulp from 'gulp';
import del  from 'del';

import CONFIG from '../config';

gulp.task( 'clean', () => {
	return del( [ CONFIG.root.dest ] );
});
