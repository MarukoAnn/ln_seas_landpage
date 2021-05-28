import http from '../utils/interceptors'

export default class Service {
	// 预约请求
	static setUserReserve(data){
		return http.post('/devs/api/overseas/recordOverseasUser.php', data)
	}

  // 获取预约情况
	static getUserReserveDetail(){
		return http.post('/devs/api/overseas/getOverseasUser.php')
	}

	// 获取配置信息
	static  getConfig(data){
		return http.post('/devs/api/overseas/getOverseasConfig.php', data)
	}
}
