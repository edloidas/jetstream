import CONFIG from '../config';
import gulp   from 'gulp';
import path   from 'path';
import watch  from 'gulp-watch';

gulp.task( 'watch', [ 'browserSync' ], () => {
	let watchableTasks = [ 'fonts', 'iconFont', 'images', 'svgSprite','html', 'css' ];

	watchableTasks.forEach( ( taskName ) => {
		let task = CONFIG.tasks[ taskName ];
		if ( task ) {
			let filePattern = path.join( CONFIG.root.src, task.src, `**/*.{${task.extensions.join(',')}}`);
			watch( filePattern, () => { gulp.start( taskName ); });
		}
	});
});
