import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import util from './utils/util'
import { Dialog, Toast } from 'vant';
import { ElButton, ElSelect, ElCarousel,ElOption, ElInput, ElCheckbox, ElCarouselItem, ElIcon} from 'element-plus';
import './assets/style/common/common.scss'
import './assets/fonts/font.scss'
import server from './server/index'
import Video from 'video.js'
import 'video.js/dist/video-js.css'
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
Vue.config.globalProperties.$http = server;
Vue.config.globalProperties.$video = Video;
Vue.use(router).mount('#app')
