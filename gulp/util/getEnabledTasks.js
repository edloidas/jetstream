import CONFIG from '../config';
import compact from 'lodash/array/compact';

// Groups of parallel tasks
let assetTasks = [ 'fonts', 'iconFont', 'images', 'svgSprite' ];
let codeTasks  = [ 'html', 'css', 'js' ];

export default ( env ) => {
	let jsTasks = {
		watch: 'webpack:watch',
		development: 'webpack:development',
		production: 'webpack:production'
	};

	let matchFilter = ( task ) => {
		if ( CONFIG.tasks[ task ] ) {
			if ( task === 'js' ) {
				task = jsTasks[ env ] || jsTask.watch;
			}
			return task;
		}
	};

	return {
		assetTasks: compact( assetTasks.map( matchFilter ) ),
		codeTasks: compact( codeTasks.map( matchFilter ) )
	};
};
