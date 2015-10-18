/*

 Gulpfile.js in Babel format (using ES6).

 Tasks are splited into the several files in `tasks` folder.

*/

import requireDir from 'require-dir';

import CONFIG from './gulp/config';

requireDir( CONFIG.gulpTasks, { recurse: true } );
