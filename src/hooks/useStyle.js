import {ref} from 'vue'
function useStyle(){
	const pcHomeBgc = ref({
		background: `url('${require('@/assets/images/bgc.jpg')}') no-repeat center`
	})
	const logoBgc = ref({
		background: `url('${require('@/assets/images/basic/logo.png')}')`
	})
	const yButtonBgc = ref({
		background: `url('${require('@/assets/images/basic/button_preorder1.png')}')`,
		backgroundSize: '100% 100%',
	})
	const tipInputBgc = ref({
		background: `url(${require('@/assets/images/basic/bg_num_input.png')}) no-repeat center`,
		backgroundSize: '100% 100%',
	})
	const mobileSelIput = ref({
		background: `url(${require('@/assets/images/mobile/sel_down.png')}) no-repeat scroll right center transparent`,
		backgroundSize: '10% 30%',
	})
	const giftStyleConfig = ref({
		giftBgc: {
			background: `url(${require('@/assets/images/basic/gift_bgc.png')}) no-repeat`,
			backgroundSize: '100% 100%',
		},
		giftLeftBtnBgc: {
			background: `url(${require('@/assets/images/basic/gift_left_btn.png')}) no-repeat`,
			backgroundSize: '100% 100%',
		},
		giftRightBtnBgc: {
			background: `url(${require('@/assets/images/basic/gift_right_btn.png')}) no-repeat`,
			backgroundSize: '100% 100%',
		}
	})
	return {
		yButtonBgc,
		logoBgc,
		pcHomeBgc,
		mobileSelIput,
		tipInputBgc,
		giftStyleConfig
	}

}

export default useStyle
