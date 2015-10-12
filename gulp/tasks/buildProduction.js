import gulp            from 'gulp';
import gulpSequence    from 'gulp-sequence';
import getEnabledTasks from '../util/getEnabledTasks';

gulp.task( 'build:production', ( cb ) => {
	let tasks = getEnabledTasks( 'production' );
	gulpSequence( 'clean', tasks.assetTasks, tasks.codeTasks, cb );
});
