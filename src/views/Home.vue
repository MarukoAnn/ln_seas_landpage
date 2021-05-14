<template>
    <div class="home" :style="bgcUrl">
        <!--        <img style="width: 100%;height: 100%; position: absolute;top: 0;left: 0;z-index: -1" src="@/assets/images/bgc.jpg" alt="" />-->
        <!-- 右上角的logo       -->
<!--        <div class="logo">-->
<!--            <div :style="logoBgc"></div>-->
<!--        </div>-->
        <!--  右边的挂件按钮  -->
        <div class="left-button">
            <img src="@/assets/images/basic/button_float.png" alt="">
            <div class="mark">
                <a href="https://apps.apple.com/tw/app/id1489271479">123</a>
                <a href="https://play.google.com/store/apps/details?id=com.gamebeans.gog">456</a>
                <a>789</a>
                <a>123</a>
                <div @click="nextToTopClick"></div>
            </div>

        </div>
        <!--  头部预约     -->
        <div class="header">
            <div class="img-box">
                <img src="@/assets/images/basic/button_play.png" alt="">
                <img src="@/assets/images/basic/title2.png" alt="">
            </div>
            <div class="yu-button" :style="yButtonBgc">
                <strong>123512人已加入勇者團</strong>
            </div>
            <!--            <img src="@/assets/images/basic/button_preorder1.png" alt="">-->
        </div>
        <!--  第一部分  -->
        <div class="tip-one">
            <div class="to-title">
                <img src="@/assets/images/basic/tip1.png" alt="">
            </div>
            <div class="tip-body">
                <!--  背景图片-->
                <img class="tb-bgc" src="@/assets/images/basic/step1-copy.png" alt="">
                <div class="tb-bx">
                    <img src="@/assets/images/basic/bx.png" alt="">
                </div>
                <!--  填写手机号码-->
                <div class="input-info">
                    <!-- 选择手机号-->
                    <div class="num-title" :style="tipInputBgc">
                        <el-select v-model="numId" placeholder="请选择">
                            <el-option label="台灣 + 886" value="1"></el-option>
                        </el-select>
                    </div>
                    <!-- 输入手机号 -->
                    <div class="num-input" :style="tipInputBgc">
                        <el-input v-model="numId" placeholder="请输入内容"></el-input>
                    </div>
                </div>
            <!-- 同意资料-->
                <div class="agree">
<!--                    <el-checkbox v-model="agree"></el-checkbox>-->
                    <div class="check" @click="agree = !agree">
                        <div :class="{'inner-check': true, 'is_checkd': agree}"></div>
                    </div>
                    <span>同意個人資料的收集使用及接收短信資訊</span>
                </div>
                <div class="reserve-btn">
                    <img src="@/assets/images/basic/reserve-btn.png" alt="">
                </div>
            </div>
            <div class="share-panel">
                <div class="share-content">
                    <div class="like-box">
                        <img src="@/assets/images/basic/step2.png" alt="">
                        <div class="like-btn">
                            <img class="like-icon" src="@/assets/images/basic/like.png" alt="">
                            <span class="like-span">贊3.2萬</span>
                        </div>
                    </div>
                    <div class="share-box">
                        <img src="@/assets/images/basic/step3.png" alt="">
                        <div class="share-btn">
                            <img src="@/assets/images/basic/fb_share_btn.png" alt="">
                        </div>
                    </div>
                </div>
                <span class="share-tips">完成相關活動後，請點擊頁面右方“獎勵查詢”查詢相關禮包兌換碼。</span>
            </div>
        </div>
        <div class="tip-two">
            <div class="tt-title">
                <img src="@/assets/images/basic/tip2.png" alt="">
            </div>
            <div class="tt-progress">
                <div class="tp-num">
                    <span>前預約人數<strong>123512</strong> </span>
                </div>
                <div class="tp-gress">
                    <div  class="tp-icon" >
                        <img :style="{'margin-left': item.left, transform: item.transfrom}" v-for="(item, index) in progressList" :key="index" src="@/assets/images/basic/ic_bar.png" alt="">
                    </div>
                    <img src="@/assets/images/basic/bg_bar.png" alt="">
                </div>
            </div>
        </div>
        <div class="swiper">
            <swiper></swiper>
            <!--            <Carousel></Carousel>-->
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import {defineComponent, getCurrentInstance, ref, onBeforeMount} from 'vue'
import Clipboard from 'clipboard';
import Carousel from '../components/Carousel'
import swiper from "@/components/swiper";
import useStyle from "@/hooks/useStyle";

export default defineComponent({
    name: 'Home',
    components: {
        Carousel,
        swiper
    },
    setup() {
        /* 获取样式 */
        const {	yButtonBgc, logoBgc, bgcUrl, tipInputBgc} = useStyle();
        const {proxy} = getCurrentInstance();
        const AppId = ref(proxy.$util.appID);
        const imgList = ref([
            {url: 'http://xlwy.leniu.com/upload/xlwy/images/20190924/1569331444201301.png', class: 'first'},
            {url: 'http://xlwy.leniu.com/upload/xlwy/images/20190924/1569332001763258.png', class: '',},
            {url: 'http://xlwy.leniu.com/upload/xlwy/images/20190924/1569331347230177.png', class: '',},
        ])
        const progressList = ref([
            {left: '8px', transfrom: 'rotate(0deg)'},
            {left: '-20px', transfrom: 'rotate(180deg)'},
            {left: '-22px', transfrom: 'rotate(0deg)'},
            {left: '-20px', transfrom: 'rotate(180deg)'},
            {left: '-22px', transfrom: 'rotate(0deg)'},
        ])
        const text = ref('123')
        const numId = ref('1');
        const agree = ref(false)
        console.log(proxy.$util.isPhone());
        console.log(proxy.$util.isAndroid());

        /*--------回到顶部---------------*/
        const nextToTopClick = () => {
           let setTimer =  setInterval(() => {
               if ( document.getElementById('nav').scrollTop > 5){
                   document.getElementById('nav').scrollTop -= 5;
               }else {
                   document.getElementById('nav').scrollTop = 0;
               }
               if (document.getElementById('nav').scrollTop == 0){
                    clearInterval(setTimer)
                }
            })
        }

        /*--------复制到剪切板-------*/
        const copy = () => {
            let clipboard = new Clipboard('.tag-read')
            clipboard.on('success', (e) => {
                console.log('复制成功');
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
        /*--------加载FBSDK---------*/
        const loadFBSDK = () => {
            const params = `#version=v3.3&appId=${AppId.value}&status=true&cookie=true&xfbml=true&autoLogAppEvents=true`;
            (function (d, s, id) { // Load the SDK asynchronously
                var js;
                var fjs = d.getElementsByTagName(s)[0]
                if (d.getElementById(id)) return
                js = d.createElement(s);
                js.id = id
                js.src = 'https://connect.facebook.net/zh_TW/sdk.js' + params
                fjs.parentNode.insertBefore(js, fjs)
            }(document, 'script', 'facebook-jssdk'))
        }
        const onFBLogin = () => {
            const _this = this
            /*   // FB分享
                 FB.ui(
                     {
                         method: "share",
                         mobile_iframe: true,
                         href: "http://localhost:8080/recover/home"
                     },
                     function(response) {}
                 );*/
            // 检测FB登录状态
            /* FB.getLoginStatus(function(response) { // Called after the JS SDK has been initialized.
                 // console.log(response)
                 if (response.status === 'connected') { // 已登录
                     // Has logged into your webpage and Facebook.
                     _this.handleSomething()
                 } else { // 未登录进行登录
                     FB.login(function(res) {
                         if (res.status === 'connected') {
                             // Logged into your webpage and Facebook.
                             _this.handleSomething()
                         } else {
                             // The person is not logged into your webpage or we are unable to tell.
                         }
                     })
                 }
             })*/
        }
        onBeforeMount(() => {
            loadFBSDK();
        })
        return {
            logoBgc,
            yButtonBgc,
            tipInputBgc,
            bgcUrl,
            numId,
            agree,
            progressList,
            text,
            imgList,
            copy,
            onFBLogin,
            nextToTopClick
        }
    }
})
</script>
<style lang="scss">
//@import "@/assets/style/pc/pc.scss";
</style>
