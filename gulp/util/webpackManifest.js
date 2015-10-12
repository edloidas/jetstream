import path from 'path';
import fs   from 'fs';

export default ( publicPath, dest, filename ) => {
	filename = filename || 'rev-manifest.json';

	return () => {
		let self = this || global;
		self.plugin('done', ( stats ) => {
			let stat     = stats.toJson();
			let chunks   = stats.assetsByChunkName;
			let manifest = {};

			for ( let key in chunks ) {
				let originalFilename = key + '.js';
				manifest[ path.join( publicPath, originalFilename ) ] = path.join( publicPath, chunks[ key ] );
			}

			fs.writeFileSync(
				path.join( process.cwd(), dest, filename ),
				JSON.stringify( manifest )
			);
		});
	};
};
