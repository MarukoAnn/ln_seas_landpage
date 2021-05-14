import {ref} from 'vue'
function useStyle(){
	const bgcUrl = ref({
		backgroundImage: `url('${require('@/assets/images/bgc.jpg')}')`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: '100% 100%'
	})
	const logoBgc = ref({
		background: `url('${require('@/assets/images/basic/logo.png')}')`
	})
	const yButtonBgc = ref({
		background: `url('${require('@/assets/images/basic/button_preorder1.png')}')`
	})
	const tipInputBgc = ref({
		background: `url(${require('@/assets/images/basic/bg_num_input.png')}) no-repeat`,
		backgroundSize: '100% 100%',
	})
	return {
		yButtonBgc,
		logoBgc,
		bgcUrl,
		tipInputBgc
	}

}

export default useStyle
