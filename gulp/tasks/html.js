import CONFIG from '../config';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import gulpif from 'gulp-if';
import htmlmin from 'gulp-htmlmin';
import path from 'path';

const exclude = path.normalize( `!**/{${CONFIG.tasks.html.excludeFolders.join(',')}}/**` );
const extensions = CONFIG.tasks.html.extensions.map( ( ext ) => path.join( CONFIG.root.src, CONFIG.tasks.html.src, `/**/*.${ext}` ) );
extensions.push( exclude );

const paths = {
	src: extensions,
	dest: path.join( CONFIG.root.dest, CONFIG.tasks.html.dest ),
};

gulp.task( 'html', () => {
	return gulp.src( paths.src )
		.pipe( gulpif( process.env.NODE_ENV === 'production', htmlmin( CONFIG.tasks.html.htmlmin ) ) )
		.pipe( gulp.dest( paths.dest ) )
		.pipe( browserSync.stream() );
});
