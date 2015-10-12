import gulp            from 'gulp';
import gulpSequence    from 'gulp-sequence';
import getEnabledTasks from '../util/getEnabledTasks';

gulp.task( 'default', ( cb ) => {
	let tasks = getEnabledTasks( 'watch' );
	gulpSequence( 'clean', tasks.assetTasks, tasks.codeTasks, 'watch', cb );
});
