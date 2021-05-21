<template>
   <div class="home">
       <div id="mobile" style="position: relative">
           <img class="bgc" src="@/assets/images/mobile/bgc.jpg" alt="">
           <div class="mobile">
               <div class="home-body">
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
                           <img class="tb-bgc" src="@/assets/images/mobile/step1.png" alt="">
                           <!--                        <div class="tb-bx">
                                                       <img src="@/assets/images/basic/bx.png" alt="">
                                                   </div>-->
                           <!--  填写手机号码-->
                           <div class="input-info" >
                               <!-- 选择手机号-->
                               <div class="num-title" :style="tipInputBgc">
                                   <select name="" id="" v-model="numId" :style="mobileSelIput">
                                       <option value="1">台灣 + 886</option>
                                   </select>
                                   <!--                                <el-select v-model="numId" placeholder="请选择">
                                                                       <el-option label="台灣 + 886" value="1"></el-option>
                                                                   </el-select>-->
                               </div>
                               <!-- 输入手机号 -->
                               <div class="num-input" :style="tipInputBgc">
                                   <input v-model="numId" placeholder="请输入内容" />
                               </div>
                           </div>
                           <!-- 同意资料-->
                           <div class="agree">
                               <!--                    <el-checkbox v-model="agree"></el-checkbox>-->
                               <div class="check" @click="agree = !agree">
                                   <div :class="{'inner-check': true, 'is_checkd': agree}"></div>
                               </div>
                               <img src="@/assets/images/mobile/xun.png" alt="">
                           </div>
                           <div class="reserve-btn" @click="isShowDialog = true; isShowPopType = 'success'">
                               <img src="@/assets/images/basic/reserve-btn.png" alt="">
                           </div>
                       </div>
                       <div class="share-panel">
                           <div class="share-content">
                               <div class="like-box">
                                   <img src="@/assets/images/mobile/step2.png" alt="">
                                   <div class="like-btn">
                                       <img class="like-icon" src="@/assets/images/basic/like.png" alt="">
                                       <span class="like-span">贊3.2萬</span>
                                       <div class="fb-like"
                                            data-href="https://developers.facebook.com/docs/plugins/"
                                            data-width=""
                                            data-layout="standard"
                                            data-action="like"
                                            data-size="small"
                                            data-share="false"></div>
                                       <!--                                    <div class="fb-like" data-href="" data-width="" data-layout="standard"
                                                                                data-action="like" data-size="small" data-show-faces="false" data-share="false"></div>-->
                                       <!--                                    <div class="fb-share-button like-icon"-->
                                       <!--                                         data-href="http://localhost:8080/recover/home"-->
                                       <!--                                         data-layout="button_count"></div>-->
                                       <!--                                    <div class="like-icon" data-href="https://www.facebook.com/mizuiren/" data-layout="standard" data-action="like" data-show-faces="true" data-share="false"></div>-->

                                   </div>
                               </div>
                               <div class="share-box">
                                   <img src="@/assets/images/mobile/step3.png" alt="">
                                   <div class="share-btn" id="fbshare">
                                       <img src="@/assets/images/mobile/fb_share_btn.png" alt="">
                                   </div>
                               </div>
                           </div>
                           <span class="share-tips">完成相關活動後，請點擊頁面右方“獎勵查詢”查詢相關禮包兌換碼。</span>
                       </div>
                   </div>
                   <!--  第二部分 -->
                   <div class="tip-two">
                       <div class="tt-title">
                           <img src="@/assets/images/basic/tip2.png" alt="">
                       </div>
                       <div class="tt-progress">
                           <div class="tp-num">
                               <span>前預約人數<strong>123512</strong> </span>
                           </div>
                           <div class="tp-gress">
                               <div class="tp-icon">
                                   <img :style="{'margin-left': item.left}"
                                        v-for="(item, index) in progressList" :key="index"
                                        :src="(index + 1) % 2 === 1? require('@/assets/images/basic/ic_bar.png'): require('@/assets/images/basic/bar_right.png')"
                                        alt="">
                               </div>
                               <img class="tp-gressbgc" src="@/assets/images/basic/bg_bar_copy.png" alt="">
                           </div>
                           <div class="tp-shop">
                               <!--                            <div class="shop-left">
                                                               <img src="@/assets/images/shop/shop_logo.png" alt="">
                                                           </div>-->
                               <div class="shop-right">
                                   <div class="shop-one">
                                       <img class="img-one" src="@/assets/images/shop/shop_one.png" alt="">
                                       <img class="img-two" src="@/assets/images/shop/shop_three.png" alt="">
                                       <div class="actvie">
                                           <img src="@/assets/images/shop/active.png" alt="">
                                           <img src="@/assets/images/shop/active.png" alt="">
                                       </div>
                                   </div>
                                   <div class="shop-two">
                                       <img src="@/assets/images/shop/shop_two.png" alt="">
                                       <img class="img-two" src="@/assets/images/shop/shop_four.png" alt="">
                                       <div class="actvie">
                                           <img src="@/assets/images/shop/active.png" alt="">
                                           <img src="@/assets/images/shop/active.png" alt="">
                                       </div>
                                   </div>
                                   <div class="shop-three">
                                       <img class="img-big" src="@/assets/images/shop/shop_big.png" alt="">
                                       <div class="active">
                                           <img src="@/assets/images/shop/active.png" alt="">
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <!--  第三部分   -->
                   <div class="tip-three">
                       <div class="te-title">
                           <img src="@/assets/images/basic/tip3.png" alt="">
                       </div>
                       <div class="te-body">
                           <div class="tb-show">
                               <img src="@/assets/images/role/role_bgc.png" alt="">
                               <img class="role-info" :src="roleImgUrl" alt="">
                               <div class="role-sex">
                                   <div v-if="roleSex === 1">
                                       <div class="rs-mark mark-right " @click="roleSexClick"></div>
                                       <img src="@/assets/images/role/btn_man.png" alt="">
                                   </div>
                                   <div v-else>
                                       <div class="rs-mark mark-left" @click="roleSexClick"></div>
                                       <img src="@/assets/images/role/btn_wuman.png" alt="">
                                   </div>
                               </div>
                           </div>
                           <div class="tb-tab">
                               <!--                            <div class="left">
                                                               <img src="@/assets/images/role/btn_left.png" alt="" @click="prevShowRoleClick">
                                                           </div>-->
                               <div class="conter">
                                   <img v-for="(item, index) in roleImgList" :class="{'no-active': !item.active}" :key="index"
                                        :src="item.active? (roleSex === 1?  item.manIconImageUrl: item.wumanIconImageUrl): item.manIconImageUrl"
                                        alt="" @click="showRoleInfoClick(item)">
                               </div>
                               <!--                            <div class="right">
                                                               <img src="@/assets/images/role/btn_right.png" alt="" @click="nextShowRoleClick">
                                                           </div>-->
                           </div>
                       </div>
                   </div>
                   <!--  第四部分   -->
                   <div class="tip-four">
                       <div class="tf-title">
                           <img src="@/assets/images/basic/tip4.png" alt="">
                       </div>
                       <div class="tf-body">
                           <swiper></swiper>
                       </div>
                   </div>
                   <!--  底部文字 -->
                   <section class="footer-text">
                       <img class="ci-logo" src="@/assets/images/mobile/footer_text.png" alt="">
                   </section>
                   <footer class="footer-img">
                       <div class="btn-left" @click="isShowDialog = true; isShowPopType = 'gift'"></div>
                       <img class="btn-top" @click="nextToTopClick" src="@/assets/images/mobile/button_top.png" alt="">
                       <img class="fb-angal" src="@/assets/images/mobile/btn_float.png" alt="">
                       <div class="btn-right">
                           <img v-if="!isAndroid" src="@/assets/images/mobile/btn_apple.jpg" alt="">
                           <img v-else src="@/assets/images/mobile/btn_google.jpg" alt="">
                       </div>
                   </footer>

               </div>
           </div>
       </div>
       <!-- 预约成功的弹窗  -->
       <transition name="bounce">
           <div class="cl-dialog" v-if="isShowDialog">
               <div class="cd-content">
                   <div class="img-content" v-if="isShowPopType === 'success'">
                       <div class="ic-box">
                           <img src="@/assets/images/basic/pop_dialog.png" alt="">
                           <img class="close-btn" @click="isShowDialog = false"
                                src="@/assets/images/basic/button_close.png" alt="">
                       </div>
                       <div class="ic-role">
                           <img src="@/assets/images/basic/pop_role.png" alt="">
                       </div>
                   </div>
                   <div class="gift-content" v-else>
                       <div class="gc-body" :style="giftStyleConfig.giftBgc">
                           <div class="gc-title">
                               <div class="gt-left" :style="giftStyleConfig.giftLeftBtnBgc">
                                   <span>獎品名</span>
                               </div>
                               <div class="gt-right" :style="giftStyleConfig.giftRightBtnBgc">
                                   <span>禮包兌換碼</span>
                               </div>
                           </div>
                           <div class="gc-item" v-for="(gift, index) in giftList" :key="index">
                               <div class="gt-left" :style="giftStyleConfig.giftLeftBtnBgc">
                                   <span>{{ gift.label }}</span>
                               </div>
                               <div class="gt-right" :style="giftStyleConfig.giftRightBtnBgc">
                                   <span>{{ gift.code }}</span>
                                   <button class="copy-btn tag-read" @click="copy" :data-clipboard-text="gift.code">
                                       复制
                                   </button>
                               </div>
                           </div>
                       </div>
                       <img class="close-btn" @click="isShowDialog = false"
                            src="@/assets/images/basic/button_close.png" alt="">
                   </div>
               </div>
           </div>
       </transition>
   </div>
</template>

<script>
import {defineComponent, ref, getCurrentInstance, onBeforeMount, onMounted} from 'vue'
import Clipboard from 'clipboard';
import swiper from './swiper'
import useStyle from '@/hooks/useStyle'
export default defineComponent({
    name: "mobile",
    components: {
        swiper,
    },
    setup(){
        /* 获取样式 */
        const {giftStyleConfig, mobileSelIput, yButtonBgc, logoBgc, tipInputBgc} = useStyle();
        const {proxy} = getCurrentInstance();
        const AppId = ref(proxy.$util.appID);
        const imgList = ref([
            {url: 'http://xlwy.leniu.com/upload/xlwy/images/20190924/1569331444201301.png', class: 'first'},
            {url: 'http://xlwy.leniu.com/upload/xlwy/images/20190924/1569332001763258.png', class: '',},
            {url: 'http://xlwy.leniu.com/upload/xlwy/images/20190924/1569331347230177.png', class: '',},
        ])


        const progressList = ref([
            {left: 0, transfrom: 'rotate(0deg)'},
            {left: '-7px', transfrom: 'rotate(180deg)'},
            {left: '-7px', transfrom: 'rotate(0deg)'},
            {left: '-7px', transfrom: 'rotate(180deg)'},
            {left: '-7px', transfrom: 'rotate(0deg)'},
            {left: '-7px', transfrom: 'rotate(0deg)'},
            {left: '-7px', transfrom: 'rotate(0deg)'},
        ])
        const text = ref('123')
        const numId = ref('1');
        // 是否是安卓
        const isAndroid = ref(proxy.$util.isAndroid())
        // 是否同意
        const agree = ref(false);
        // 角色列表
        const roleImgList = ref([
            {
                manImageUrl: require('@/assets/images/mobile/role/jlm_info.png'),
                womanImageUrl: require('@/assets/images/mobile/role/jlw_info.png'),
                manIconImageUrl: require('@/assets/images/role/jlm_active.png'),
                wumanIconImageUrl: require('@/assets/images/role/jlw_active.png'),
                active: true,
            },
            {
                manImageUrl: require('@/assets/images/mobile/role/lmm_info.png'),
                womanImageUrl: require('@/assets/images/mobile/role/lmw_info.png'),
                manIconImageUrl: require('@/assets/images/role/lmm_active.png'),
                wumanIconImageUrl: require('@/assets/images/role/lmw_active.png'),
                active: false,
            },
            {
                manImageUrl: require('@/assets/images/mobile/role/mdm_info.png'),
                womanImageUrl: require('@/assets/images/mobile/role/mdw_info.png'),
                manIconImageUrl: require('@/assets/images/role/mdm_active.png'),
                wumanIconImageUrl: require('@/assets/images/role/mdw_active.png'),
                active: false,
            },
            {
                manImageUrl: require('@/assets/images/mobile/role/sjm_info.png'),
                womanImageUrl: require('@/assets/images/mobile/role/sjw_info.png'),
                manIconImageUrl: require('@/assets/images/role/jsm_actvie.png'),
                wumanIconImageUrl: require('@/assets/images/role/jsw_active.png'),
                active: false,
            },
            {
                manImageUrl: require('@/assets/images/mobile/role/sqm_info.png'),
                womanImageUrl: require('@/assets/images/mobile/role/sqw_info.png'),
                manIconImageUrl: require('@/assets/images/role/sqm_active.png'),
                wumanIconImageUrl: require('@/assets/images/role/sqw_active.png'),
                active: false,
            },
            {
                manImageUrl: require('@/assets/images/mobile/role/stm_info.png'),
                womanImageUrl: require('@/assets/images/mobile/role/stw_info.png'),
                manIconImageUrl: require('@/assets/images/role/stm_active.png'),
                wumanIconImageUrl: require('@/assets/images/role/stw_active.png'),
                active: false,
            },
        ])
        // 角色展示信息
        const roleImgUrl = ref('');
        // 1 表示男  2表示女
        const roleSex = ref(1)
        // 当前激活Index
        const roleActiveIndex = ref(0)
        // 弹窗显示
        const isShowDialog = ref(false)
        // 弹窗显示类型  success 预约成功  gift 礼包
        const isShowPopType = ref('gift');
        // 礼包码列表
        const giftList = ref([
            {label: '預約禮包', code: 'VIP666'},
            {label: '預約禮包', code: 'VIP888'}
        ])

        console.log(proxy.$util.isPhone());
        console.log(proxy.$util.isAndroid());

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
        const roleSexClick = () => {
            roleSex.value = roleSex.value === 1 ? roleSex.value = 2 : roleSex.value = 1;
            roleImgList.value.forEach(val => {
                if (val.active) {
                    roleImgUrl.value = roleSex.value === 1 ? val.manImageUrl : val.womanImageUrl;
                }
            })
        }
        const prevShowRoleClick = () => {
            if (roleActiveIndex.value > 0) {
                roleActiveIndex.value -= 1;
            } else {
                roleActiveIndex.value = roleImgList.value.length - 1;
            }
            roleImgList.value.forEach(val => {
                val.active = false;
            })
            roleImgList.value[roleActiveIndex.value].active = true;
            roleImgUrl.value = roleSex.value === 1 ? roleImgList.value[roleActiveIndex.value].manImageUrl : roleImgList.value[roleActiveIndex.value].womanImageUrl;
        }
        // 下一个
        const nextShowRoleClick = () => {
            if (roleActiveIndex.value < roleImgList.value.length - 1) {
                roleActiveIndex.value += 1;
            } else {
                roleActiveIndex.value = 0;
            }
            roleImgList.value.forEach(val => {
                val.active = false;
            })
            roleImgList.value[roleActiveIndex.value].active = true;
            roleImgUrl.value = roleSex.value === 1 ? roleImgList.value[roleActiveIndex.value].manImageUrl : roleImgList.value[roleActiveIndex.value].womanImageUrl;
        }
        //
        const showRoleInfoClick = (item) => {
            roleImgList.value.forEach(val => {
                val.active = false;
            })
            item.active = true;
            roleImgUrl.value = roleSex.value === 1 ? item.manImageUrl : item.womanImageUrl;

        }
        onBeforeMount(() => {
            loadFBSDK();

            roleImgList.value.forEach(val => {
                if (val.active) {
                    roleImgUrl.value = roleSex.value === 1 ? val.manImageUrl : val.womanImageUrl;
                }
            })
        })

        onMounted(() => {
     /*       let btn = document.getElementById('fbshare');
            console.log(btn);
            btn.addEventListener('touchstart',function(){
                // alert('123')
            }, false);*/
        })
        return {
            numId,
            agree,
            progressList,
            text,
            imgList,
            roleImgUrl,
            roleSex,
            roleImgList,
            isShowDialog,
            mobileSelIput,
            giftStyleConfig,
            yButtonBgc,
            logoBgc,
            tipInputBgc,
            isShowPopType,
            giftList,
            isAndroid,
            copy,
            roleSexClick,
            showRoleInfoClick,
            nextShowRoleClick,
            prevShowRoleClick,
            onFBLogin,
            nextToTopClick
        }
    }
})
</script>

<style scoped lang="scss">
@import "src/assets/style/mobile/mobile.scss";
</style>
