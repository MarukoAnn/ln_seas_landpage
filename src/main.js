import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import util from './utils/util'
import { ElButton, ElSelect, ElCarousel,ElOption, ElInput, ElCheckbox, ElCarouselItem, ElIcon} from 'element-plus';
import './assets/style/common/common.scss'
if(util.isPhone()){
	require('./assets/style/mobile/mobile.scss')
}else {
	console.log('加载了');
	require('./assets/style/pc/pc.scss')
}
const Vue = createApp(App);
Vue.component(ElButton.name, ElButton);
Vue.component(ElSelect.name, ElSelect);
Vue.component(ElInput.name, ElInput);
Vue.component(ElOption.name, ElOption);
Vue.component(ElCheckbox.name, ElCheckbox);
Vue.component(ElIcon.name, ElIcon);
Vue.component(ElCarousel.name, ElCarousel);
Vue.component(ElCarouselItem.name, ElCarouselItem);
Vue.config.globalProperties.$util = util;
Vue.use(router).mount('#app')
