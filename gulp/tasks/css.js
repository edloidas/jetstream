import CONFIG from '../config';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import cssImport from 'postcss-import';
import mixins from 'postcss-mixins';
import simpleVars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import calc from 'postcss-calc';
import autoprefixer from 'autoprefixer';
import mqpacker from 'css-mqpacker';
import csswring from 'csswring';
import comments from 'postcss-discard-comments';
import path from 'path';
import { postcssError as logger } from '../util/compileLogger';

const exclude = CONFIG.tasks.css.exclude.map( ( pattern ) => ( '!' + path.join( CONFIG.root.src, CONFIG.tasks.css.src, `/**/${pattern}` ) ) );
const extensions = CONFIG.tasks.css.extensions.map( ( ext ) => path.join( CONFIG.root.src, CONFIG.tasks.css.src, `/**/*.${ext}` ) );

const paths = {
	src: extensions.concat( exclude ),
	dest: path.join( CONFIG.root.dest, CONFIG.tasks.css.dest ),
};

const processors = [
	cssImport,
	mixins,
	simpleVars,
	nested,
	calc,
	autoprefixer( CONFIG.tasks.css.autoprefixer ),
	mqpacker,
	csswring,
	comments,
];

gulp.task( 'css', ( cb ) => {
	return gulp.src( paths.src )
		.pipe( sourcemaps.init() )
		.pipe( postcss( processors ) )
		.on( 'error', logger.bind( null, cb ) )
		.pipe( sourcemaps.write() )
		.pipe( gulp.dest( paths.dest ) )
		.pipe( browserSync.stream() );
});
