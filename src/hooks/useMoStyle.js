import {ref} from 'vue'
function useMoStyle(){
	const pcHomeBgc = ref({
		background: `url('${require('@/assets/images/Mo/bgc.jpg')}') no-repeat center`
	})
	const logoBgc = ref({
		background: `url('${require('@/assets/images/Xun/basic/logo.png')}')`
	})
	const yButtonBgc = ref({
		background: `url('${require('@/assets/images/Mo/basic/btn_yu.png')}')`,
		backgroundSize: '100% 100%',
	})
	const tipInputBgc = ref({
		background: `url(${require('@/assets/images/Mo/basic/bg_num_input.png')}) no-repeat center`,
		backgroundSize: '100% 100%',
	})
	const mobileSelIput = ref({
		background: `url(${require('@/assets/images/Xun/mobile/sel_down.png')}) no-repeat scroll right center transparent`,
		backgroundSize: '10% 30%',
	})
	const giftStyleConfig = ref({
		giftBgc: {
			background: `url(${require('@/assets/images/Mo/basic/pop_gift.png')}) no-repeat`,
			backgroundSize: '100% 100%',
		},
		giftLeftBtnBgc: {
			background: `url(${require('@/assets/images/Mo/basic/gift_btn.png')}) no-repeat`,
			backgroundSize: '100% 100%',
		},
		giftRightBtnBgc: {
			background: `url(${require('@/assets/images/Mo/basic/gift_btn.png')}) no-repeat`,
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

export default useMoStyle
