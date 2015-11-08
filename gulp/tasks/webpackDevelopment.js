import gulp from 'gulp';
import webpackTask from '../util/webpackTask';

gulp.task( 'webpack:development', webpackTask.bind( null, 'development' ));
