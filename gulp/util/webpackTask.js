import logger from './compileLogger';
import webpack from 'webpack';
import webpackConfig from './webpackMultiConfig';

export default ( type, callback ) => {
	webpack( webpackConfig( type ), ( err, stats ) => {
		logger( err, stats );
		callback();
	});
};
