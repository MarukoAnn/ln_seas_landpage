import md5 from 'js-md5';

export default class Util {

	static appID = 848701962395734;
	phoneTest = /^([6|9|5])\d{7}$|^[0][9]\d{8}$|^[6]\d{7}$|^([8|9])\d{7}$|[1]\d{8}$|/; // 台湾、香港、澳门、新加坡
	static Xconfig = {
		game_id: 40,
		app: 60110,
		time: this.getPhpNow(),
	}
	/**
	 * 获取当前时间戳
	 * @returns {number}
	 */
	static getPhpNow() {
		const now = new Date().getTime();
		return +`${now}`.slice(0, -3);
	}

	/**
	 * 判断是否是手机 返回一个布尔值，true为手机 false 为pc
	 * @returns {boolean}
	 */
	static isPhone(){
			if(/phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent)) {
					return true
			} else {
				 return false
			}
	}

	/**
	 * 判断是安卓还是ios, 返回一个布尔值，true为安卓 false为ios
	 * @returns {boolean}
	 */
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

	/**
	 * 签名函数，Md5签名
	 * @param pamars， 传入一个对象，获取签名
	 * @returns {*}
	 */
	static getSign(pamars) {
		const sortedParamsQuery = this.getSortAsciiQuery(pamars);
		console.log('MD5加密后:', sortedParamsQuery);
		return md5('b269d5a28c1d967abc06f8fcc7507a89'+ sortedParamsQuery);
	}

	/**
	 * 生成sign值需要的
	 * @param obj 传入对象
	 * @returns {string} 返回一个string字符串
	 */
	static getSortAsciiQuery(obj) {
		const arr = [];
		let num = 0;
		for (const i in obj) {
			arr[num] = i;
			num++;
		}
		const sortArr = arr.sort();
		// let sortObj = {};    //完成排序值
		let str = ''; // 自定义排序字符串
		for (const i in sortArr) {
			str += sortArr[i] + '=' + obj[sortArr[i]] + '&';
			// sortObj[sortArr[i]] = obj[sortArr[i]];
		}
		// 去除两侧字符串
		const char = '&';
		str = str.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');
		return str;
	}

	static verfiyPhoneNumber(number) {

	}
}
