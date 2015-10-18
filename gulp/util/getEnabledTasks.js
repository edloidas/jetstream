import CONFIG from '../config';
import compact from 'lodash/array/compact';

// Groups of parallel tasks
const assetTasks = [ 'fonts', 'iconFont', 'images', 'svgSprite' ];
const codeTasks = [ 'html', 'css', 'js' ];

export default ( env ) => {
	const jsTasks = {
		watch: 'webpack:watch',
		development: 'webpack:development',
		production: 'webpack:production',
	};

	const matchFilter = ( task ) => {
		if ( CONFIG.tasks[ task ] ) {
			let filteredTask = task;
			if ( task === 'js' ) {
				filteredTask = jsTasks[ env ] || jsTasks.watch;
			}
			return filteredTask;
		}
	};

	return {
		assetTasks: compact( assetTasks.map( matchFilter ) ),
		codeTasks: compact( codeTasks.map( matchFilter ) ),
	};
};
