const CONFIG = {
	gulpTasks: 'gulp/tasks/',
	root: {
		src: 'src',
		dest: 'public',
	},
	tasks: {
		js: {
			src: 'js',
			dest: 'js',
			extractSharedJs: true,
			entries: {
				app: [ './app.js' ],
			},
			extensions: [ 'js' ],
		},
		css: {
			src: 'styles',
			dest: 'styles',
			autoprefixer: {
				browsers: [ 'last 3 version' ],
			},
			extensions: [ 'css' ],
			exclude: [ '_*.css' ],
		},
		html: {
			src: 'html',
			dest: './',
			htmlmin: {
				collapseWhitespace: true,
			},
			extensions: [ 'html', 'json', 'xml' ],
			excludeFolders: [ 'shared', 'data' ],
		},
		images: {
			src: 'img',
			dest: 'img',
			extensions: [ 'jpg', 'png', 'svg', 'gif' ],
		},
		fonts: {
			src: 'fonts',
			dest: 'fonts',
			extensions: [ 'woff2', 'woff', 'eot', 'ttf', 'svg' ],
		},
		svgSprite: {
			src: 'sprites',
			dest: 'images',
			extensions: ['svg'],
		},
	},
};

export default CONFIG;
