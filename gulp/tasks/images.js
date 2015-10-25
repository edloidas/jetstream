import CONFIG from '../config';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import changed from 'gulp-changed';
import imagemin from 'gulp-imagemin';
import path from 'path';

const paths = {
	src: path.join( CONFIG.root.src, CONFIG.tasks.images.src, '/**' ),
	dest: path.join( CONFIG.root.dest, CONFIG.tasks.images.dest ),
};

gulp.task( 'images', () => {
	return gulp.src( paths.src )
		.pipe( changed( paths.dest ) ) // Ignore unchanged files
		.pipe( imagemin() )            // Optimize
		.pipe( gulp.dest( paths.dest ) )
		.pipe( browserSync.stream() );
});
