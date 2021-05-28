module.exports = {
	publicPath: '/recover/',
	outputDir: './dist/recover',
	assetsDir: 'assets',//静态资源目录(js,css,img,fonts)这些文件都可以写里面
	//关闭语法检测
	lintOnSave: false,
	devServer: {
		//以上的ip和端口是我们本机的;下面为需要跨域的
		proxy: {//配置跨域
			'/devs': {
				target: 'https://f1.leniuhw.com',//真实的后台地址
				ws: true,
				changOrigin: true,//允许跨域
				pathRewrite: {
					'^/devs': ''//请求的时候使用这个dev就可以
				}
			}

		}
	}
}
