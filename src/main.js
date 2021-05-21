import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import util from './utils/util'
import { Dialog, Toast } from 'vant';
import { ElButton, ElSelect, ElCarousel,ElOption, ElInput, ElCheckbox, ElCarouselItem, ElIcon} from 'element-plus';
import './assets/style/common/common.scss'
import './assets/fonts/font.scss'
const Vue = createApp(App);
Vue.component(ElButton.name, ElButton);
Vue.component(ElSelect.name, ElSelect);
Vue.component(ElInput.name, ElInput);
Vue.component(ElOption.name, ElOption);
Vue.component(ElCheckbox.name, ElCheckbox);
Vue.component(ElIcon.name, ElIcon);
Vue.component(ElCarousel.name, ElCarousel);
Vue.component(ElCarouselItem.name, ElCarouselItem);
Vue.use(Dialog)
Vue.use(Toast)
Vue.config.globalProperties.$util = util;
Vue.use(router).mount('#app')
