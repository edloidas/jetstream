import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';
import getEnabledTasks from '../util/getEnabledTasks';

gulp.task( 'build:development', ( cb ) => {
  const tasks = getEnabledTasks( 'development' );
  gulpSequence( 'clean', tasks.assetTasks, tasks.codeTasks, cb );
});
