module.exports = {
  // 选项
	// pubilcPath:'./',
	lintOnSave: false,
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
	
}