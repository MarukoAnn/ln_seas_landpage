module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
	plugins: [
		[
			"import",
			{
				libraryName: 'element-plus',
				customStyleName: (name) => {
					name = name.slice(3)
					return `element-plus/packages/theme-chalk/src/${name}.scss`;
				},
			}
		],
		['import', {
			libraryName: 'vant',
			libraryDirectory: 'es',
			style: true
		}, 'vant']
	],
}
