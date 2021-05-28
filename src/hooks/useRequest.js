import {onBeforeMount, getCurrentInstance, ref, reactive} from 'vue';

function useRequest() {
	const {proxy} = getCurrentInstance();
	const configState = reactive({...proxy.$util.Xconfig, sign: ''});
	const appointPamars = reactive({
		...proxy.$util.Xconfig,
		name: '',
		addr: '',
		phone: '',
		event_date: '', // 预约日期 20210524
		thumbs_up: null,
		share: null,
		google_store: null,
		apple_store: null,
	})

	configState.sign = proxy.$util.getSign({...proxy.$util.Xconfig});
	// 获取配置信息
	const configData = ref('')
	// 获取配置请求
	const getConfig = async () => {
		await proxy.$http.getConfig(configState).then(value => {
			console.log(value);
			if (value.code === 0) {
				configData.value = value.data;
			}
		})
	}

	const setUserAppoint = (data, callback) => {
		proxy.$http.setUserReserve(data).then(val => {
			callback(val)
		})
	}
	// 配置
	onBeforeMount(() => {
		getConfig()
	})

	return {
		configData,
		setUserAppoint,
		appointPamars,
	}
}

export default useRequest;
