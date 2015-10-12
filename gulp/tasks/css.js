import CONFIG       from '../config';

import gulp         from 'gulp';
import browserSync  from 'browser-sync';
import sourcemaps   from 'gulp-sourcemaps';
import postcss      from 'gulp-postcss';
import cssImport    from 'postcss-import';
import nested       from 'postcss-nested';
import autoprefixer from 'autoprefixer';
import mqpacker     from 'css-mqpacker';
import csswring     from 'csswring';
import comments     from 'postcss-discard-comments';
import path         from 'path';

let paths = {
	src:  CONFIG.tasks.css.extensions.map( ( ext ) => path.join( CONFIG.root.src, CONFIG.tasks.css.src, `/**/*.${ext}` ) ),
	dest: path.join( CONFIG.root.dest, CONFIG.tasks.css.dest )
};

let processors = [
	cssImport,
	nested,
	autoprefixer( CONFIG.tasks.css.autoprefixer ),
	mqpacker,
	csswring,
	comments
];

gulp.task( 'css', () => {
	return gulp.src( paths.src )
		.pipe( sourcemaps.init() )
		.pipe( postcss( processors ) )
		.pipe( sourcemaps.write() )
		.pipe( gulp.dest( paths.dest ) )
		.pipe( browserSync.reload( { stream: true } ) );
});
