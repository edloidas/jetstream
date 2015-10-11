import gulp        from 'gulp';
import webpackTask from '../util/webpackTask';

gulp.task( 'webpack:production', webpackTask.bind( null, 'production' ) );
