import path from 'path';
import fs from 'fs';

export default ( publicPath, dest, name ) => {
	const filename = name || 'rev-manifest.json';

	return () => {
		const context = this || global;
		context.plugin('done', ( stats ) => {
			// const stat = stats.toJson();
			const chunks = stats.assetsByChunkName;
			const manifest = {};

			for ( const key in chunks ) {
				if ( chunks.hasOwnProperty( key ) ) {
					const originalFilename = key + '.js';
					manifest[ path.join( publicPath, originalFilename ) ] = path.join( publicPath, chunks[ key ] );
				}
			}

			fs.writeFileSync(
				path.join( process.cwd(), dest, filename ),
				JSON.stringify( manifest )
			);
		});
	};
};
