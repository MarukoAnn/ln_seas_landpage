export default class Util {
	static appID = 848701962395734
	static isPhone(){
			if(/phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent)) {
					return true
			} else {
				 return false
			}
	}
	static isAndroid() {
		const u = navigator.userAgent
			var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1;
			var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
			if (isAndroid) {
				// alert("我是安卓");
				return true
			}
			if (isIOS) {
				// alert("我是苹果");
				return  false
			}
	}
}
