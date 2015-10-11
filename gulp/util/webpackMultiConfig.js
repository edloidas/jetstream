import CONFIG          from '../config';

import path            from 'path';
import webpack         from 'webpack';
import webpackManifest from './webpackManifest';

export default ( env ) => {
  let jsSrc = path.resolve( CONFIG.root.src, CONFIG.tasks.js.src );
  let jsDest = path.resolve( CONFIG.root.dest, CONFIG.tasks.js.dest );
  let publicPath = path.join( CONFIG.tasks.js.src, '/' );
  let filenamePattern = env === 'production' ? '[name]-[hash].js' : '[name].js';
  let extensions = CONFIG.tasks.js.extensions.map( ( extension ) => {
    return '.' + extension;
  });

  let webpackConfig = {
    context: jsSrc,
    plugins: [],
    resolve: {
      extensions: [ '' ].concat( extensions )
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader?stage=1',
          exclude: /node_modules/
        }
      ]
    }
  };

  if ( env === 'development' ) {
    webpackConfig.devtool = 'source-map';
    webpack.debug = true;
  }

  if ( env === 'production' ) {
    webpackConfig.plugins.push(
      new webpackManifest( publicPath, CONFIG.root.dest ),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify( 'production' )
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.NoErrorsPlugin()
    );
  }

  return webpackConfig;
};
