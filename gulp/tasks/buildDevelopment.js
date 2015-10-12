import gulp            from 'gulp';
import gulpSequence    from 'gulp-sequence';
import getEnabledTasks from '../util/getEnabledTasks';

gulp.task( 'build:development', ( cb ) => {
	let tasks = getEnabledTasks( 'development' );
	gulpSequence( 'clean', tasks.assetTasks, tasks.codeTasks, cb );
});
