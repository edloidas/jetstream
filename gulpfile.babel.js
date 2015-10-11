/*

 Gulpfile.js in Babel format (using ES6).

 Tasks are splited into the several files in `tasks` folder.

*/

import gulp        from 'gulp';
import runSequence from 'run-sequence';
import requireDir  from 'require-dir';

import CONFIG from './gulp/config';

const TASKS = requireDir( CONFIG.gulpTasks, { recurse: true } );
