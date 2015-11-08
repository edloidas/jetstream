import gulp from 'gulp';
import logger from '../util/compileLogger';
import webpack from 'webpack';
import browserSync from 'browser-sync';
import webpackConfig from '../util/webpackMultiConfig';

gulp.task( 'webpack:watch', ( callback ) => {
  let initialCompile = false;

  webpack( webpackConfig( 'development' )).watch( 300, ( err, stats ) => {
    logger( err, stats );
    browserSync.reload();
    // On the initial compile, let gulp know the task is done
    if ( !initialCompile ) {
      initialCompile = true;
      callback();
    }
  });
});
