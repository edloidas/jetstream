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
import handleErrors from '../util/handleErrors';

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

gulp.task( 'css', () => {
	return gulp.src( paths.src )
		.pipe( sourcemaps.init() )
		.pipe( postcss( processors ) )
		.on( 'error', handleErrors )
		.pipe( sourcemaps.write() )
		.pipe( gulp.dest( paths.dest ) )
		.pipe( browserSync.reload( { stream: true } ) );
});
