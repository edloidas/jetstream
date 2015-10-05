/*

 Gulpfile.js in Babel format (using ES6).

 Tasks are splited into the several files in `tasks` folder.

*/

import gulp from 'gulp';
import runSequence from 'run-sequence';
import requireDir from 'require-dir';

import DIR from './gulp/path.babel.js';

const TASKS = requireDir( DIR.gulpTasks, { recurse: true } );

// Common tasks

gulp.task( 'default', [ 'build' ] );

gulp.task( 'build', () => {
	return runSequence(
		'clean'
		// [ 'build-styles', 'build-js' ],
		// 'build-html',
		// 'connect'
	);
});
