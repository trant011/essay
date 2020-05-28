
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

module.exports = {
  // 选项
	// pubilcPath:'./',
	lintOnSave: false,
	productionSourceMap: false,
	devServer: {
		port: 8079,
		index: 'index.html',
		overlay: {
				warnings: false,
				errors: false
		},
	},
	pages: {
		index: {
    	entry: 'src/pages/index/index.js',                  //页面的入口文件
     	template: 'public/index.html',                   //页面的模板文件
     	filename: 'index.html'                           //页面的出口名称，即build生成的文件名称
	  },
	  login: {
     entry: 'src/pages/home/home.js',
     template: 'public/home.html',
     filename: 'home.html',
	  },
  },
	
	css: {
		extract: false
	},

    chainWebpack: config => {
        config.optimization.minimize(true);
	},
	//Webpack配置
	configureWebpack: config => {
		const plugins = [];
		//生产环境确认

		//production版本console.log 打包时 自动注释
		config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true

		//压缩
		plugins.push(
			//gzip压缩
			new CompressionWebpackPlugin({
				filename: "[path].gz[query]",
				algorithm: "gzip",
				test: productionGzipExtensions,
				threshold: 10240,
				minRatio: 0.8
			})
		);
		config.plugins = [...config.plugins, ...plugins];
	},

}