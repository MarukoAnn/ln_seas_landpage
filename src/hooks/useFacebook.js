import {ref, onBeforeMount, getCurrentInstance} from 'vue';
import {useRoute} from  'vue-router'
function usrFacebook() {
	const route = useRoute();
	const {proxy} = getCurrentInstance();
	const AppId = ref(proxy.$util.appID);
	/*--------加载FBSDK---------*/
	const loadFBSDK = () => {
		(function(d, s, id){
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.id = id;
			js.src = "https://connect.facebook.net/zh_TW/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
		setTimeout(() => {
			FB.init({
				appId: AppId.value,
				cookie: true,
				xfbml: true,
				version: 'v2.0'
			});
			FB.AppEvents.logPageView();
		}, 1000)
	}

	/**----------喜欢的回调--------**/
	const fbLikeCallback = () => {
		FB.Event.subscribe('edge.remove', function() {
			console.log('不喜欢'); //false: 不喜欢  true: 喜欢
		})
		FB.Event.subscribe('edge.create', function (){
			console.log('喜欢');
		})
	}

	/**/
	const onFBLogin = () => {
		const _this = this
		// 检测FB登录状态
		FB.getLoginStatus(function(response) { // Called after the JS SDK has been initialized.
			if (response.status === 'connected') { // 已登录
				// Has logged into your webpage and Facebook.
				// FB分享
				FB.ui({
							method: "share",
							mobile_iframe: true,
							href: "https://f1.leniuhw.com/recover/index.html#/about",
						},
						function(response) {
							 console.log(response);
							 console.log('分享成功');
						}
				);
			} else { // 未登录进行登录
				FB.login(function(res) {
					if (res.status === 'connected') {
						// Logged into your webpage and Facebook.
						console.log('登录了');
					} else {
						console.log(res);
						// The person is not logged into your webpage or we are unable to tell.
					}
				})
			}
		})
	}
	onBeforeMount(() => {
		loadFBSDK();
		// console.log(route.path);
	})

	return {
		onFBLogin,
		loadFBSDK
	}
}

export default usrFacebook;
