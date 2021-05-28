import {ref, getCurrentInstance} from 'vue'
import Clipboard from 'clipboard';

function useCommon() {
		const {proxy} = getCurrentInstance();
		// 电话列表
		const phoneList = ref([
			{label: '台灣', value: '台灣', flag: 886, parten: /^([0][9])\d{8}$/g, placholder: '09xxxxxxxx'},
			{label: '香港', value: '香港', flag: 852, parten: /^([6|9|5])\d{7}$/, placholder: '6xxxxxxx或5xxxxxxx或9xxxxxxx'},
			{label: '澳門', value: '澳門', flag: 853, parten: /^([6])\d{7}$/, placholder: '6xxxxxxx'},
			{label: '新加坡', value: '新加坡', flag: 65, parten: /^([8|9])\d{7}$/, placholder: '8xxxxxxx或9xxxxxxx'},
			{label: '馬來西亞', value: '馬來西亞', flag: 60, parten: /^([1])\d{8}$/, placholder: '1xxxxxxx'},
		]);
		// 角色列表
		const roleImgList = ref([
			{
				manImageUrl: require('@/assets/images/Xun/role/jlm_info.png'),
				womanImageUrl: require('@/assets/images/Xun/role/jlw_info.png'),
				manIconImageUrl: require('@/assets/images/Xun/role/jlm_active.png'),
				wumanIconImageUrl: require('@/assets/images/Xun/role/jlw_active.png'),
				active: true,
			},
			{
				manImageUrl: require('@/assets/images/Xun/role/lmm_info.png'),
				womanImageUrl: require('@/assets/images/Xun/role/lmw_info.png'),
				manIconImageUrl: require('@/assets/images/Xun/role/lmm_active.png'),
				wumanIconImageUrl: require('@/assets/images/Xun/role/lmw_active.png'),
				active: false,
			},
			{
				manImageUrl: require('@/assets/images/Xun/role/mdn_info.png'),
				womanImageUrl: require('@/assets/images/Xun/role/mdw_info.png'),
				manIconImageUrl: require('@/assets/images/Xun/role/mdm_active.png'),
				wumanIconImageUrl: require('@/assets/images/Xun/role/mdw_active.png'),
				active: false,
			},
			{
				manImageUrl: require('@/assets/images/Xun/role/sjm_info.png'),
				womanImageUrl: require('@/assets/images/Xun/role/sjw_info.png'),
				manIconImageUrl: require('@/assets/images/Xun/role/jsm_actvie.png'),
				wumanIconImageUrl: require('@/assets/images/Xun/role/jsw_active.png'),
				active: false,
			},
			{
				manImageUrl: require('@/assets/images/Xun/role/sqm_info.png'),
				womanImageUrl: require('@/assets/images/Xun/role/sqw_info.png'),
				manIconImageUrl: require('@/assets/images/Xun/role/sqm_active.png'),
				wumanIconImageUrl: require('@/assets/images/Xun/role/sqw_active.png'),
				active: false,
			},
			{
				manImageUrl: require('@/assets/images/Xun/role/stm_info.png'),
				womanImageUrl: require('@/assets/images/Xun/role/stw_info.png'),
				manIconImageUrl: require('@/assets/images/Xun/role/stm_active.png'),
				wumanIconImageUrl: require('@/assets/images/Xun/role/stw_active.png'),
				active: false,
			},
		]);
		// 角色列表
		const roleMoImgList = ref([
			{
				manImageUrl: require('@/assets/images/Mo/role/jlm_role.png'),
				imgBgcUrl: require('@/assets/images/Mo/role/jl_bgc.png'),
				womanImageUrl: require('@/assets/images/Mo/role/jlw_role.png'),
				manIconImageUrl: require('@/assets/images/Mo/role/jlm_active.png'),
				wumanIconImageUrl: require('@/assets/images/Mo/role/jlw_active.png'),
				active: true,
			},
			{
				manImageUrl: require('@/assets/images/Mo/role/lmm_role.png'),
				imgBgcUrl: require('@/assets/images/Mo/role/lm_bgc.png'),
				womanImageUrl: require('@/assets/images/Mo/role/lmw_role.png'),
				manIconImageUrl: require('@/assets/images/Mo/role/lmm_active.png'),
				wumanIconImageUrl: require('@/assets/images/Mo/role/lmw_active.png'),
				active: false,
			},
			{
				manImageUrl: require('@/assets/images/Mo/role/mdm_role.png'),
				imgBgcUrl: require('@/assets/images/Mo/role/md_bgc.png'),
				womanImageUrl: require('@/assets/images/Mo/role/mdw_role.png'),
				manIconImageUrl: require('@/assets/images/Mo/role/mdm_active.png'),
				wumanIconImageUrl: require('@/assets/images/Mo/role/mdw_active.png'),
				active: false,
			},
			{
				manImageUrl: require('@/assets/images/Mo/role/jsm_role.png'),
				imgBgcUrl: require('@/assets/images/Mo/role/js_bgc.png'),
				womanImageUrl: require('@/assets/images/Mo/role/jsw_role.png'),
				manIconImageUrl: require('@/assets/images/Mo/role/jsm_actvie.png'),
				wumanIconImageUrl: require('@/assets/images/Mo/role/jsw_active.png'),
				active: false,
			},
			{
				manImageUrl: require('@/assets/images/Mo/role/sqm_role.png'),
				imgBgcUrl: require('@/assets/images/Mo/role/sq_bgc.png'),
				womanImageUrl: require('@/assets/images/Mo/role/sqw_role.png'),
				manIconImageUrl: require('@/assets/images/Mo/role/sqm_active.png'),
				wumanIconImageUrl: require('@/assets/images/Mo/role/sqw_active.png'),
				active: false,
			},
			{
				manImageUrl: require('@/assets/images/Mo/role/stm_role.png'),
				imgBgcUrl: require('@/assets/images/Mo/role/st_bgc.png'),
				womanImageUrl: require('@/assets/images/Mo/role/stw_role.png'),
				manIconImageUrl: require('@/assets/images/Mo/role/stm_active.png'),
				wumanIconImageUrl: require('@/assets/images/Mo/role/stw_active.png'),
				active: false,
			},
		]);
		// 角色列表
		const roleMoBImgList = ref([
		{
			manImageUrl: require('@/assets/images/Mo/mobile/role/jlm_role.png'),
			imgBgcUrl: require('@/assets/images/Mo/mobile/role/jl_bgc.png'),
			womanImageUrl: require('@/assets/images/Mo/mobile/role/jlw_role.png'),
			manIconImageUrl: require('@/assets/images/Mo/role/jlm_active.png'),
			wumanIconImageUrl: require('@/assets/images/Mo/role/jlw_active.png'),
			active: true,
		},
		{
			manImageUrl: require('@/assets/images/Mo/mobile/role/lmm_role.png'),
			imgBgcUrl: require('@/assets/images/Mo/mobile/role/lm_bgc.png'),
			womanImageUrl: require('@/assets/images/Mo/mobile/role/lmw_role.png'),
			manIconImageUrl: require('@/assets/images/Mo/role/lmm_active.png'),
			wumanIconImageUrl: require('@/assets/images/Mo/role/lmw_active.png'),
			active: false,
		},
		{
			manImageUrl: require('@/assets/images/Mo/mobile/role/mdm_role.png'),
			imgBgcUrl: require('@/assets/images/Mo/mobile/role/md_bgc.png'),
			womanImageUrl: require('@/assets/images/Mo/mobile/role/mdw_role.png'),
			manIconImageUrl: require('@/assets/images/Mo/role/mdm_active.png'),
			wumanIconImageUrl: require('@/assets/images/Mo/role/mdw_active.png'),
			active: false,
		},
		{
			manImageUrl: require('@/assets/images/Mo/mobile/role/jsm_role.png'),
			imgBgcUrl: require('@/assets/images/Mo/mobile/role/js_bgc.png'),
			womanImageUrl: require('@/assets/images/Mo/mobile/role/jsw_role.png'),
			manIconImageUrl: require('@/assets/images/Mo/role/jsm_actvie.png'),
			wumanIconImageUrl: require('@/assets/images/Mo/role/jsw_active.png'),
			active: false,
		},
		{
			manImageUrl: require('@/assets/images/Mo/mobile/role/sqm_role.png'),
			imgBgcUrl: require('@/assets/images/Mo/mobile/role/sq_bgc.png'),
			womanImageUrl: require('@/assets/images/Mo/mobile/role/sqw_role.png'),
			manIconImageUrl: require('@/assets/images/Mo/role/sqm_active.png'),
			wumanIconImageUrl: require('@/assets/images/Mo/role/sqw_active.png'),
			active: false,
		},
		{
			manImageUrl: require('@/assets/images/Mo/mobile/role/stm_role.png'),
			imgBgcUrl: require('@/assets/images/Mo/mobile/role/st_bgc.png'),
			womanImageUrl: require('@/assets/images/Mo/mobile/role/stw_role.png'),
			manIconImageUrl: require('@/assets/images/Mo/role/stm_active.png'),
			wumanIconImageUrl: require('@/assets/images/Mo/role/stw_active.png'),
			active: false,
		},
	]);
		/*--------复制到剪切板-------*/
		const copy = () => {
				let clipboard = new Clipboard('.tag-read')
				clipboard.on('success', (e) => {
					console.log('复制成功');
					proxy.$toast('复制成功');
					// 释放内存
					clipboard.destroy()
				})
				clipboard.on('error', (e) => {
					// 不支持复制
					console.log('该浏览器不支持自动复制')
					// 释放内存
					clipboard.destroy()
				})
			}
		/* 滚动到预约按钮处*/
		const nextToRever = () => {
			let setTimer = setInterval(() => {
				if (document.getElementById('nav').scrollTop + 5 < 750 ) {
					document.getElementById('nav').scrollTop += 5;
				} else {
					document.getElementById('nav').scrollTop = 750;
				}
				if (document.getElementById('nav').scrollTop === 750) {
					clearInterval(setTimer)
				}
			})

		}
		/*--------回到顶部---------------*/
		const nextToTopClick = () => {
			let setTimer = setInterval(() => {
				if (document.getElementById('nav').scrollTop > 5) {
					document.getElementById('nav').scrollTop -= 5;
				} else {
					document.getElementById('nav').scrollTop = 0;
				}
				if (document.getElementById('nav').scrollTop == 0) {
					clearInterval(setTimer)
				}
			})
		}

		return {
			phoneList,
			roleImgList,
			roleMoImgList,
			roleMoBImgList,
			nextToRever,
			copy,
			nextToTopClick
		}
}

export default useCommon
