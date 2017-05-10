var config = {
	entry: 'C:\\AppServ\\www\\reactApp\\js\\main.js',
	output: {
		path: 'C:\\AppServ\\www\\reactApp',
		filename: 'index.js',
	},
	devServer: {
		inline: true,
		port: 8080,
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude : /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}

module.exports = config;