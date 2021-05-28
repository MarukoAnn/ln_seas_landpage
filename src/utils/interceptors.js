import axios from 'axios'

if (process.env.NODE_ENV === 'production') {
	axios.defaults.baseURL = process.env.VUE_APP_URL;
}
//设置的请求次数，请求的间隙
axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000;

// 全局设置超时时间
axios.defaults.timeout = 30000;

axios.interceptors.request.use((config) => {
	console.log(config);
	return config;
})

axios.interceptors.response.use(
		(respone) => {
			switch (respone.data.code) {
				case 0:
					return respone.data;
				default:
					return Promise.reject(respone.data)
			}
		},

		(err) => {
			if (err.message.includes('timeout')) {
				console.log('请求超时, 请稍后重试')
			} else if (err.message.includes('Network')) {
				console.log('链接网络失败，请检查网络是否正常')
			}
			return Promise.reject(err)

		}
)
export default class Http {
	// eslint-disable-next-line
	static get(url, data) {
		return new Promise(((resolve, reject) => {
			axios.get(url, {params: data}).then(res => {
				resolve(res)
			}).catch(err => {
				reject(err);
			})
		}));
	}

	// eslint-disable-next-line
	static post(url, data) {
		let formData = new FormData();
		for (let key in data) {
			if (typeof data[key] !== Object) {
				formData.append(key, data[key])
			} else {
				formData.append(key, JSON.stringify(data[key]))
			}
		}
		return new Promise(((resolve, reject) => {
			axios.post(url, formData).then(res => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		}))
	}

}
