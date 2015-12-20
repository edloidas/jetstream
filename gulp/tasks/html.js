import CONFIG from '../config';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import gulpif from 'gulp-if';
import data from 'gulp-data';
import jade from 'gulp-jade';
import htmlmin from 'gulp-htmlmin';
import path from 'path';
import fs from 'fs';
import { commonError as logger } from '../util/compileLogger';

const exclude = path.normalize( `!**/{${CONFIG.tasks.html.excludeFolders.join( ',' )}}/**` );
const extensions = CONFIG.tasks.html.extensions.map(( ext ) => path.join( CONFIG.root.src, CONFIG.tasks.html.src, `/**/*.${ext}` ));
extensions.push( exclude );

const paths = {
  src: extensions,
  dest: path.join( CONFIG.root.dest, CONFIG.tasks.html.dest ),
};

function getData() {
  const dataPath = path.resolve( CONFIG.root.src, CONFIG.tasks.html.src, CONFIG.tasks.html.dataFile );
  return JSON.parse( fs.readFileSync( dataPath, 'utf8' ));
}

gulp.task( 'html', ( cb ) => {
  return gulp.src( paths.src )
    .pipe( gulpif( CONFIG.tasks.html.useJade, data( getData )))
    .on( 'error', logger.bind( null, cb ))
    .pipe( gulpif( CONFIG.tasks.html.useJade, jade()))
    .on( 'error', logger.bind( null, cb ))
    .pipe( gulpif( process.env.NODE_ENV === 'production', htmlmin( CONFIG.tasks.html.htmlmin )))
    .pipe( gulp.dest( paths.dest ))
    .pipe( browserSync.stream());
});
