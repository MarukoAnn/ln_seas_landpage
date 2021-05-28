<template>
   <div class="home">
       <div id="mobile" style="position: relative">
           <img class="bgc" src="@/assets/images/Xun/mobile/bgc.jpg" alt="">
           <div class="mobile">
               <div class="home-body">
                   <!--  头部预约     -->
                   <div class="header">
                       <div class="img-box">
                           <img src="@/assets/images/Xun/basic/button_play.png" alt="">
                           <img src="@/assets/images/Xun/basic/title2.png" alt="">
                       </div>
                       <div class="yu-button" :style="yButtonBgc">
                           <strong>123512人已加入勇者團</strong>
                       </div>
                       <!--            <img src="@/assets/images/Xun/basic/button_preorder1.png" alt="">-->
                   </div>
                   <!--  第一部分  -->
                   <div class="tip-one">
                       <div class="to-title">
                           <img src="@/assets/images/Xun/basic/tip1.png" alt="">
                       </div>
                       <div class="tip-body">
                           <!--  背景图片-->
                           <img class="tb-bgc" src="@/assets/images/Xun/mobile/step1.png" alt="">
                           <!--                        <div class="tb-bx">
                                                       <img src="@/assets/images/Xun/basic/bx.png" alt="">
                                                   </div>-->
                           <!--  填写手机号码-->
                           <div class="input-info" >
                               <!-- 选择手机号-->
                               <div class="num-title" :style="tipInputBgc">
                                   <select name="" id="" v-model="numId" :style="mobileSelIput">
                                       <option :value="item.value" v-for="(item) in phoneList">{{item.label}}+{{  item.flag}}</option>
                                   </select>

                               </div>
                               <!-- 输入手机号 -->
                               <div class="num-input" :style="tipInputBgc">
                                   <input v-model="phoneNumber" :placeholder="inputPlacholder" />
                               </div>
                           </div>
                           <!-- 同意资料-->
                           <div class="agree">
                               <!--                    <el-checkbox v-model="agree"></el-checkbox>-->
                               <div class="check" @click="agree = !agree">
                                   <div :class="{'inner-check': true, 'is_checkd': agree}"></div>
                               </div>
                               <img src="@/assets/images/Xun/mobile/xun.png" alt="">
                           </div>
                           <div class="reserve-btn" @click="isShowDialog = true; isShowPopType = 'success'">
                               <img src="@/assets/images/Xun/basic/reserve-btn.png" alt="">
                           </div>
                       </div>
                       <div class="share-panel">
                           <div class="share-content">
                               <div class="like-box">
                                   <img src="@/assets/images/Xun/mobile/step2.png" alt="">
                                   <div class="like-btn">
<!--                                       <img class="like-icon" src="@/assets/images/Xun/basic/like.png" alt="">
                                       <span class="like-span">贊3.2萬</span>-->
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
                                   <img src="@/assets/images/Xun/mobile/step3.png" alt="">
                                   <div class="share-btn" id="fbshare">
                                       <img src="@/assets/images/Xun/mobile/fb_share_btn.png" alt="">
                                   </div>
                               </div>
                           </div>
                           <span class="share-tips">完成相關活動後，請點擊頁面右方“獎勵查詢”查詢相關禮包兌換碼。</span>
                       </div>
                   </div>
                   <!--  第二部分 -->
                   <div class="tip-two">
                       <div class="tt-title">
                           <img src="@/assets/images/Xun/basic/tip2.png" alt="">
                       </div>
                       <div class="tt-progress">
                           <div class="tp-num">
                               <span>前預約人數<strong>123512</strong> </span>
                           </div>
                           <div class="tp-gress">
                               <div class="tp-icon">
                                   <img :style="{'margin-left': item.left}"
                                        v-for="(item, index) in progressList" :key="index"
                                        :src="(index + 1) % 2 === 1? require('@/assets/images/Xun/basic/ic_bar.png'): require('@/assets/images/Xun/basic/bar_right.png')"
                                        alt="">
                               </div>
                               <img class="tp-gressbgc" src="@/assets/images/Xun/basic/bg_bar_copy.png" alt="">
                           </div>
                           <div class="tp-shop">
                               <!--                            <div class="shop-left">
                                                               <img src="@/assets/images/Xun/shop/shop_logo.png" alt="">
                                                           </div>-->
                               <div class="shop-right">
                                   <div class="shop-one">
                                       <img class="img-one" src="@/assets/images/Xun/shop/shop_one.png" alt="">
                                       <img class="img-two" src="@/assets/images/Xun/shop/shop_three.png" alt="">
                                       <div class="actvie">
                                           <img src="@/assets/images/Xun/shop/active.png" alt="">
                                           <img src="@/assets/images/Xun/shop/active.png" alt="">
                                       </div>
                                   </div>
                                   <div class="shop-two">
                                       <img src="@/assets/images/Xun/shop/shop_two.png" alt="">
                                       <img class="img-two" src="@/assets/images/Xun/shop/shop_four.png" alt="">
                                       <div class="actvie">
                                           <img src="@/assets/images/Xun/shop/active.png" alt="">
                                           <img src="@/assets/images/Xun/shop/active.png" alt="">
                                       </div>
                                   </div>
                                   <div class="shop-three">
                                       <img class="img-big" src="@/assets/images/Xun/shop/shop_big.png" alt="">
                                       <div class="active">
                                           <img src="@/assets/images/Xun/shop/active.png" alt="">
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <!--  第三部分   -->
                   <div class="tip-three">
                       <div class="te-title">
                           <img src="@/assets/images/Xun/basic/tip3.png" alt="">
                       </div>
                       <div class="te-body">
                           <div class="tb-show">
                               <img src="@/assets/images/Xun/role/role_bgc.png" alt="">
                               <img class="role-info" :src="roleImgUrl" alt="">
                               <div class="role-sex">
                                   <div v-if="roleSex === 1">
                                       <div class="rs-mark mark-right " @click="roleSexClick"></div>
                                       <img src="@/assets/images/Xun/role/btn_man.png" alt="">
                                   </div>
                                   <div v-else>
                                       <div class="rs-mark mark-left" @click="roleSexClick"></div>
                                       <img src="@/assets/images/Xun/role/btn_wuman.png" alt="">
                                   </div>
                               </div>
                           </div>
                           <div class="tb-tab">
                               <!--                            <div class="left">
                                                               <img src="@/assets/images/Xun/role/btn_left.png" alt="" @click="prevShowRoleClick">
                                                           </div>-->
                               <div class="conter">
                                   <img v-for="(item, index) in roleImgList" :class="{'no-active': !item.active}" :key="index"
                                        :src="item.active? (roleSex === 1?  item.manIconImageUrl: item.wumanIconImageUrl): item.manIconImageUrl"
                                        alt="" @click="showRoleInfoClick(item)">
                               </div>
                               <!--                            <div class="right">
                                                               <img src="@/assets/images/Xun/role/btn_right.png" alt="" @click="nextShowRoleClick">
                                                           </div>-->
                           </div>
                       </div>
                   </div>
                   <!--  第四部分   -->
                   <div class="tip-four">
                       <div class="tf-title">
                           <img src="@/assets/images/Xun/basic/tip4.png" alt="">
                       </div>
                       <div class="tf-body">
                           <swiper></swiper>
                       </div>
                   </div>
                   <!--  底部文字 -->
                   <section class="footer-text">
                       <img class="ci-logo" src="@/assets/images/Xun/mobile/footer_text.png" alt="">
                   </section>
                   <footer class="footer-img">
                       <div class="btn-left" @click="isShowDialog = true; isShowPopType = 'gift'"></div>
                       <img class="btn-top" @click="nextToTopClick" src="@/assets/images/Xun/mobile/button_top.png" alt="">
                       <img class="fb-angal" src="@/assets/images/Xun/mobile/btn_float.png" alt="">
                       <div class="btn-right">
                           <img v-if="!isAndroid" src="@/assets/images/Xun/mobile/btn_apple.jpg" alt="">
                           <img v-else src="@/assets/images/Xun/mobile/btn_google.jpg" alt="">
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
                           <img src="@/assets/images/Xun/basic/pop_dialog.png" alt="">
                           <img class="close-btn" @click="isShowDialog = false"
                                src="@/assets/images/Xun/basic/button_close.png" alt="">
                       </div>
                       <div class="ic-role">
                           <img src="@/assets/images/Xun/basic/pop_role.png" alt="">
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
                           <div class="gc-list">
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
                       </div>
                       <img class="close-btn" @click="isShowDialog = false"
                            src="@/assets/images/Xun/basic/button_close.png" alt="">
                   </div>
               </div>
           </div>
       </transition>
   </div>
</template>

<script>
import {defineComponent, ref, getCurrentInstance, onBeforeMount, onMounted} from 'vue'
import swiper from './XSwiper'
import useStyle from '@/hooks/useStyle'
import useCommon from '@/hooks/useCommon'
export default defineComponent({
    name: "mobile",
    components: {
        swiper,
    },
    setup(){
        /* 获取样式 */
        const {giftStyleConfig, mobileSelIput, yButtonBgc, logoBgc, tipInputBgc} = useStyle();
        const {copy, roleImgList, phoneList} = useCommon();
        const {proxy} = getCurrentInstance();
        const AppId = ref(proxy.$util.appID);
        const imgList = ref([
            {url: 'http://xlwy.leniu.com/upload/xlwy/images/20190924/1569331444201301.png', class: 'first'},
            {url: 'http://xlwy.leniu.com/upload/xlwy/images/20190924/1569332001763258.png', class: '',},
            {url: 'http://xlwy.leniu.com/upload/xlwy/images/20190924/1569331347230177.png', class: '',},
        ])
        const inputPlacholder = ref('台灣');
        const phoneNumber = ref('');
       
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
            {label: '預約禮包', code: 'VIP888'},
            {label: '預約禮包', code: 'VIP888'},
            {label: '預約禮包', code: 'VIP888'},
            {label: '預約禮包', code: 'VIP888'},
            {label: '預約禮包', code: 'VIP888'},
            {label: '預約禮包', code: 'VIP888'},
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

            inputPlacholder.value = phoneList.value[1].placholder;
            numId.value = phoneList.value[0].value;
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
            inputPlacholder,
            phoneList,
            phoneNumber,
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
@function pxtovw($args) {
    @return ($args / 750) * 100vw;
}
.home {
    width: 100vw;
    .bgc {
        width: 100%;
    }
    .mobile {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        overflow-x: hidden;
        .home-body {
            position: relative;
            padding: 1px 0;
            width: 100%;
            margin-top: pxtovw(436);
            .header {
                width: 100%;
                padding: 0 pxtovw(60);
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                .img-box {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    img:first-child {
                        position: absolute;
                        right: pxtovw(92);
                        margin-top: pxtovw(10);
                        z-index: 22;
                        width: pxtovw(82);
                        opacity: 0;
                    }
                    img:nth-child(2) {
                        z-index: 0;
                        width: 100%;
                        height: pxtovw(180);
                    }
                }
                .yu-button{
                    margin-top: pxtovw(23);
                    height: pxtovw(107);
                    width: pxtovw(345);
                    display: flex;
                    padding-bottom: pxtovw(20);
                    justify-content: center;
                    align-items: flex-end;
                    //background: url("../../images/basic/button_preorder1.png") no-repeat center;
                    strong {
                        bottom: pxtovw(10);
                        font-size: pxtovw(20);
                        font-weight: bold;
                        margin-right: pxtovw(42);
                        font-style: italic;
                        color: #fff;
                        -webkit-text-stroke: 0.52px #C14610;
                        text-shadow:  1px 1px 1px #9A6015;
                        letter-spacing: -0.1em;
                        font-family: mySecondFont;
                    }
                }
            }
            .tip-one {
                margin-top: pxtovw(50);
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                width: 100%;
                padding: 0 pxtovw(8);
                box-sizing: border-box;
                .to-title {
                    width: 100%;
                    text-align: left;
                    img{
                        width: pxtovw(470);
                    }
                }
                .tip-body {
                    position: relative;
                    width: 100%;
                    height: pxtovw(317);
                    img {
                        width: 100%;
                        position: absolute;
                        left: 0;
                    }
                    .input-info {
                        display: flex;
                        width: pxtovw(420);
                        left: pxtovw(24);
                        top: pxtovw(100);
                        position: absolute;
                        .el-input__suffix {
                            top: pxtovw(-20);
                            right: pxtovw(-2);
                            font-size: pxtovw(12);
                        }
                        .num-title {
                            /*    background: url("../../images/basic/bg_num_input.png") no-repeat center;
                                background-size: 100% 100%;*/
                            height: pxtovw(50);
                            select {
                                width: pxtovw(150);
                                border: 0;
                                outline:none;
                                padding: 0 0 0 pxtovw(20);
                                font-size: pxtovw(20);
                                /*很关键：将默认的select选择框样式清除，注意ie的比较特别用最下面的方法清除*/
                                appearance:none;
                                -moz-appearance:none;
                                -webkit-appearance:none;
                                /*在选择框的最右侧中间显示小箭头图片*/
                                /*    background: url("../../images/mobile/sel_down.png") no-repeat scroll right center transparent;
                                    background-size: 10% 30%;*/
                                margin-right: pxtovw(12);
                            }
                            /*.el-select .el-input {
                              width: pxtovw(150);
                              height: pxtovw(50);
                              display: flex;
                              align-items: center;
                              .el-input__inner {
                                height: pxtovw(50);
                                background-color: rgba(0, 0, 0, 0);
                                border: 0;
                                padding: 0 0 0 pxtovw(10);
                                font-size: pxtovw(12);
                              }
                              .el-input__suffix-inner{
                                color: #000;
                              }
                              .el-icon-arrow-up:before {
                                content: "";
                                color: #000;
                                font-size: 12px;
                              }
                            }*/
                        }
                        .num-input {
                            margin-left: pxtovw(12);
                            width: pxtovw(208);
                            height: pxtovw(50);
                            input {
                                font-size: pxtovw(26);
                                width: pxtovw(208);
                                height: pxtovw(50);
                                border: 0;
                                background-color: rgba(0, 0, 0, 0);
                                padding-left: pxtovw(12);
                                display: flex;
                                outline: none;
                                align-items: center;
                            }
                            input::placeholder{
                                font-size: pxtovw(13);
                            }
                        }
                    }
                    .agree {
                        position: absolute;
                        bottom: pxtovw(128);
                        left: pxtovw(100);
                        display: flex;
                        align-items: center;
                        .check {
                            width: pxtovw(16);
                            height: pxtovw(16);
                            box-sizing: border-box;
                            border: 1px solid #F5BF9E;
                            border-radius: 1px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin-right: pxtovw(12);
                            .inner-check{
                                width: pxtovw(10);
                                height: pxtovw(10);
                            }
                            .is_checkd {
                                background: #F5BF9E;
                            }
                        }
                        img {
                            width: pxtovw(243);
                            margin-left: pxtovw(24);
                        }
                    }
                    .reserve-btn {
                        position: absolute;
                        bottom: pxtovw(101);
                        left: pxtovw(35);
                        animation: anima-scale 2s;
                        animation-iteration-count: infinite;
                        display: flex;
                        justify-content: center;
                        width: pxtovw(322);
                        img {
                            width: pxtovw(322);
                            height: pxtovw(48);
                        }
                        &:active{
                            transform: scale(0.95,0.95)
                        }
                    }
                }
                .share-panel {
                    margin-top: pxtovw(24);
                    width: 100%;
                    padding: 0 pxtovw(8);
                    height: pxtovw(247);
                    overflow: hidden;
                    box-sizing: border-box;
                    .share-content {
                        display: flex;
                        .like-box, .share-box{
                            position: relative;
                            img {
                                width: pxtovw(358);
                            }
                        }
                        .like-box {
                            .like-btn {
                                background: #1086FF;
                                position: absolute;
                                width: pxtovw(132);
                                height: pxtovw(42);
                                display: flex;
                                justify-content: flex-start;
                                align-items: center;
                                border-radius: pxtovw(6);
                                left: pxtovw(110);
                                top: pxtovw(66);
                                .fb-like {
                                    opacity: 0;
                                    position: absolute;
                                    width: 100%;
                                }
                                :deep(.inlineBlock) {
                                    width: 100%;
                                    height: 100%;
                                }
                                .like-icon {
                                    width: pxtovw(25);
                                    height: pxtovw(25);
                                    margin-right: pxtovw(10);
                                    margin-left: pxtovw(6);
                                }
                                .like-span {
                                    color: #fff;
                                    font-weight: 600;
                                    font-size: pxtovw(18);
                                }
                            }
                        }
                        .share-box {
                            margin-left: pxtovw(6);
                            .share-btn {
                                position: absolute;
                                left: pxtovw(60);
                                top: pxtovw(66);
                                cursor:pointer;
                                img {
                                    width: pxtovw(260);
                                    height: pxtovw(42);
                                }
                                &:active{
                                    transform: scale(0.95,0.95)
                                }
                            }
                        }
                    }
                    .share-tips {
                        font-size: pxtovw(19);
                        color: #31311B;
                        float: left;
                    }
                }
            }
            .tip-two {
                margin-top: pxtovw(40);
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                width: 100%;
                padding: 0 pxtovw(8);
                box-sizing: border-box;
                overflow-x: clip;
                .tt-title {
                    width: 100%;
                    text-align: left;
                    img{
                        width: pxtovw(470);
                    }
                }
                .tt-progress {
                    width: 100vw;
                    padding: 0 pxtovw(8);
                    box-sizing: border-box;
                    .tp-num {
                        width: 100%;
                        box-sizing: border-box;
                        padding-right: pxtovw(10);
                        text-align: right;
                        span {
                            font-size: pxtovw(20);
                            font-weight: bold;
                            color: #87610F;
                            strong {
                                margin-bottom: pxtovw(16);
                                font-size: pxtovw(50);
                                color: #93F259;
                                -webkit-text-stroke: 1px #87610F;
                                text-shadow:  1px 1px 1px #FBF270;
                                letter-spacing: pxtovw(-6);
                            }
                        }
                    }
                    .tp-gress {
                        width: 100%;
                        position: relative;
                        .tp-icon {
                            position: absolute;
                            top: pxtovw(1);
                            //left: 3px;
                            z-index: 3;
                            img {
                                width: pxtovw(38);
                                height: pxtovw(34);
                            }
                        }
                        .tp-gressbgc {
                            position: absolute;
                            left: 0;
                            z-index: 2;
                            width: 100%;
                        }
                    }
                    .tp-shop {
                        position: relative;
                        display: flex;
                        width: 100%;
                        margin-top: pxtovw(90);
                        .shop-right {
                            position: absolute;
                            z-index: 0;
                            display: flex;
                            .shop-one, .shop-two{
                                width: pxtovw(215);
                                height: pxtovw(293);
                                margin: 0 pxtovw(8);
                                position: relative;
                                img {
                                    width: pxtovw(215);
                                    height: pxtovw(293);
                                }
                                .img-two {
                                    margin-top: pxtovw(2);
                                }
                                .actvie {
                                    img {
                                        width: pxtovw(80);
                                        height: pxtovw(70);
                                    }
                                    img:first-child {
                                        position: absolute;
                                        top: pxtovw(40);
                                        right: pxtovw(-18);
                                        z-index: 5;
                                    }
                                    img:last-child {
                                        position: absolute;
                                        top: pxtovw(350);
                                        right: pxtovw(-20);
                                        z-index: 5;
                                    }
                                }
                            }
                            .shop-three {
                                margin: 0 pxtovw(8);
                                position: relative;
                                width: pxtovw(254);
                                height: pxtovw(595);
                                .img-big {
                                    width: pxtovw(254);
                                }
                                .active {
                                    img {
                                        width: pxtovw(80);
                                        height: pxtovw(70);
                                    }
                                    position: absolute;
                                    top: pxtovw(54);
                                    right: pxtovw(-20);
                                    z-index: 5;
                                }
                            }
                        }
                    }
                }
            }
            .tip-three {
                margin-top: pxtovw(650);
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                width: 100%;
                padding: 0 pxtovw(8);
                box-sizing: border-box;
                .te-title {
                    width: 100%;
                    text-align: left;
                    img{
                        width: pxtovw(470);
                    }
                }
                .te-body {
                    width: 100%;
                    text-align: center;
                    .tb-show {
                        position: relative;
                        margin-top: pxtovw(-40);
                        img:first-child {
                            width: pxtovw(535);
                        }
                        .role-info {
                            width: 100%;
                            position: absolute;
                            left: 0;
                            top: pxtovw(48);
                        }
                        .role-sex {
                            position: absolute;
                            right: pxtovw(2);
                            top: pxtovw(78);
                            img {
                                width: pxtovw(140);
                            }
                            .rs-mark {
                                width: pxtovw(60);
                                height: pxtovw(40);
                                position: absolute;
                            }
                            .mark-left {
                                left: 4px
                            }
                            .mark-right {
                                right: 4px
                            }
                        }
                    }
                    .tb-tab {
                        display: flex;
                        align-items: center;
                        .conter {
                            display: flex;
                            flex: 1;
                            justify-content: space-around;
                            img {
                                width: pxtovw(104);
                                height: pxtovw(104);
                            }
                        }
                        .no-active {
                            -webkit-filter: grayscale(100%);
                            -moz-filter: grayscale(100%);
                            -ms-filter: grayscale(100%);
                            -o-filter: grayscale(100%);
                            filter: grayscale(100%);
                            filter: gray;
                        }
                    }
                }
            }
            .tip-four {
                margin-top: pxtovw(64);
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                width: 100%;
                padding: 0 pxtovw(8);
                box-sizing: border-box;
                .tf-title {
                    width: 100%;
                    text-align: left;
                    img{
                        width: pxtovw(470);
                    }
                }
                .tf-body {
                    margin-top: pxtovw(125);
                    width: 100%;
                    box-sizing: border-box;
                    overflow-x: clip;
                }
            }
            .footer-text {
                margin-top: pxtovw(490);
                display: flex;
                align-items: center;
                width: 100%;
                padding: 0 pxtovw(8);
                text-align: center;
                box-sizing: border-box;
                img {
                    width: 98%;
                }
            }
            .footer-img {
                display: flex;
                align-items: center;
                width: 100%;
                text-align: center;
                position: fixed;
                bottom: 0;
                opacity: 1;
                .btn-left {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: pxtovw(250);
                    height: pxtovw(110);
                    opacity: 0;
                }
                .btn-top {
                    position: absolute;
                    right: pxtovw(20);
                    bottom: pxtovw(150);
                    width: pxtovw(84);
                    height: pxtovw(72);
                }
                img {
                    width: 100%;
                }
                .btn-right {
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    width: pxtovw(220);
                    height: pxtovw(110);
                    display: flex;
                    align-items: center;
                    z-index: 0;
                }
            }
        }
    }
    .cl-dialog {
        width: 100%;
        top: 0;
        left: 0;
        height: 100vh;
        background: rgba(0,0,0,0.6);
        z-index: 999;
        padding: 0 pxtovw(8);
        box-sizing: border-box;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: space-around;
        overflow-x: hidden;
        i {
            font-size: pxtovw(50);
            color: #fff;
        }
        .cd-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .img-content {
                width: 100%;
                display: flex;
                position: relative;
                .ic-box {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    img:first-child {
                        width: pxtovw(690);
                    }
                }
                .close-btn {
                    width: pxtovw(50);
                }
                .ic-role {
                    position: absolute;
                    right: pxtovw(-380);
                    top: pxtovw(-100);
                    img {
                        height: pxtovw(615);
                    }
                }
                //img {
                //  width: 70%;
                //}
            }
            .gift-content {
                width: 100%;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                .gc-body {
                    width: pxtovw(698);
                    height: pxtovw(346);
                    padding: pxtovw(27) pxtovw(21);
                    box-sizing: border-box;
                    font-size: pxtovw(24);
                    font-weight: bold;
                    /*          background: url("../../images/basic/gift_bgc.png") no-repeat center;
                              background-size: 100%;*/
                    color: #BD4810;
                    font-family: mySecondFont;
                    .gt-left {
                        width: pxtovw(209);
                        height: pxtovw(48);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        /*   background: url("../../images/basic/gift_left_btn.png") no-repeat center;
                           background-size: 100%;*/
                    }
                    .gt-right {
                        width: pxtovw(426);
                        height: pxtovw(48);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: relative;
                        /*     background: url("../../images/basic/gift_right_btn.png") no-repeat center;
                             background-size: 100%;*/
                        .copy-btn {
                            position: absolute;
                            right: pxtovw(20);
                            width: pxtovw(72);
                            height: pxtovw(32);
                            font-size: pxtovw(24);
                            font-weight: bold;
                            border-radius: pxtovw(10);
                            color: #BD4810;
                            font-family: mySecondFont;
                            border: 0;
                            background: #FFE95B;
                            box-shadow: 1px 1px 2px #F3712F;
                            &:active {
                                //background: #42b983;
                                transform: scale(0.95,0.95)
                                //box-shadow: -1px -1px 2px #F3712F;
                            }
                        }
                    }
                    .gc-title {
                        display: flex;
                        justify-content: space-around;
                    }
                    .gc-list{
                        height: 100%;
                        height: 80%;
                        overflow-y: scroll;
                        .gc-item {
                            display: flex;
                            justify-content: space-around;
                            margin-top: 10px;
                        }
                    }
                }
                .close-btn {
                    width: pxtovw(50);
                }
            }
        }
    }
}
@media screen and (max-width: 375px){
    .home {
        .footer-img {
            margin-top: pxtovw(20);
        }
        .tip-two {
            .tt-progress {
                text-align: center;
            }
        }
    }
}
</style>
