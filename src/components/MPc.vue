<template>
    <div class="home" :style="pcHomeBgc">
        <!--  右边的挂件按钮  -->
        <div class="home-body">
            <div class="left-button">
                <img src="@/assets/images/Mo/basic/float_img.png" alt="">
                <div class="mark">
                    <a href="https://apps.apple.com/tw/app/id1489271479">
                        <img src="@/assets/images/Mo/basic/ic_apple.png" alt="">
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.gamebeans.gog">
                        <img src="@/assets/images/Mo/basic/ic_google.png" alt="">
                    </a>
                    <a>
                        <img src="@/assets/images/Mo/basic/ic_apk.png" alt="">
                    </a>
                    <a @click="isShowDialog = true;isShowPopType = 'gift'">
                        <img src="@/assets/images/Mo/basic/ic_gift.png" alt="">
                    </a>
                    <div @click="nextToTopClick">
                        <img src="@/assets/images/Mo/basic/ic_top.png" alt="">
                    </div>
                </div>
            </div>
            <!--  头部预约     -->
            <div class="header">
                <div class="img-box">
                    <img src="@/assets/images/Mo/basic/ic_title.png" alt="">
                </div>
                <div class="btn-box">
                    <div class="yu-button" :style="yButtonBgc" @click="nextToRever">
                        <strong>123512人已加入勇者團</strong>
                    </div>
                    <img src="@/assets/images/Mo/basic/btn_play.png" alt="" @click="playVideoClick">
                </div>
<!--                <div style="position: absolute; width:100vw; height: 100vh">-->
<!--&lt;!&ndash;                    <video width="500" height="200" controls src="https://www.youtube.com/watch?v=xjS6SftYQaQ"></video>&ndash;&gt;-->
<!--&lt;!&ndash;                    <video id="my-video" class="video-js vjs-default-skin" controls preload="none" width="1000" height="580"></video>&ndash;&gt;-->
<!--&lt;!&ndash;                    <iframe src="https://www.youtube.com/watch?v=xjS6SftYQaQ"></iframe>&ndash;&gt;-->
<!--&lt;!&ndash;                    <iframe id="test" width="100%" height="100%"&ndash;&gt;-->
<!--&lt;!&ndash;                            src="https://www.youtube.com/embed/nKbS-u7XWU8" frameborder="0"&ndash;&gt;-->
<!--&lt;!&ndash;                            allowfullscreen allowtransparency='yes' allow="accelerometer" autoplay></iframe>&ndash;&gt;-->
<!--&lt;!&ndash;                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nKbS-u7XWU8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>&ndash;&gt;-->
<!--                </div>-->
                <!--            <img src="@/assets/images/Xun/basic/button_preorder1.png" alt="">-->
            </div>
            <!--  第一部分  -->
            <div class="tip-one">
                <div class="to-title">
                    <img src="@/assets/images/Mo/basic/tip1.png" alt="">
                </div>
                <div class="tip-body">
                    <!--  背景图片-->
                    <img class="tb-bgc" src="@/assets/images/Mo/basic/step1.png" alt="">
                    <div class="tb-bx">
                        <img src="@/assets/images/Mo/basic/bx.png" alt="">
                    </div>
                    <!--  填写手机号码-->
                    <div class="input-info">
                        <!-- 选择手机号-->
                        <div class="num-title" :style="tipInputBgc">
                            <el-select v-model="numId" placeholder="请选择">
                                <el-option :label="`${item.label}+${item.flag}`" :value="item.value" v-for="(item, index) in phoneList" :key="index"></el-option>
                            </el-select>
                        </div>
                        <!-- 输入手机号 -->
                        <div class="num-input" :style="tipInputBgc">
                            <el-input v-model="phoneNumber"  :placeholder="InputPlacholder"></el-input>
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
                    <div class="reserve-btn" @click="isShowDialog = true; isShowPopType = 'success'">
                        <img src="@/assets/images/Mo/basic/reserve_btn.png" alt="">
                    </div>
                </div>
                <div class="share-panel">
                    <div class="share-content">
                        <div class="like-box">
                            <img src="@/assets/images/Mo/basic/step2.png" alt="">
                            <div class="like-btn">
                                <!--                                <img class="like-icon" src="@/assets/images/Xun/basic/like.png" alt="">
                                                                <span class="like-span">贊3.2萬</span>-->
                                <div class="fb-like"
                                     data-href="https://www.facebook.com/xlyzt"
                                     data-width="175px"
                                     data-layout="button_count"
                                     data-action="like"
                                     data-size="large"
                                     data-share="false"></div>
                            </div>
                        </div>
                        <div class="share-box">
                            <img src="@/assets/images/Mo/basic/step3.png" alt="">
                            <div class="share-btn" @click="onFBLogin">
                                <img src="@/assets/images/Mo/basic/fb_share_btn.png" alt="">
                            </div>
                        </div>
                    </div>
                    <span class="share-tips">完成相關活動後，請點擊頁面右方“獎勵查詢”查詢相關禮包兌換碼。</span>
                </div>
            </div>
            <!--  第二部分 -->
            <div class="tip-two">
                <div class="tt-title">
                    <img src="@/assets/images/Mo/basic/tip2.png" alt="">
                </div>
                <div class="tt-progress">
                    <div class="tp-num">
                        <span>前預約人數<strong>123512</strong> </span>
                    </div>
                    <div class="tp-gress">
                        <div class="tp-icon">
                            <img :style="{'margin-left': item.left}"
                                 v-for="(item, index) in progressList" :key="index"
                                 :src="(index + 1) % 2 === 1? require('@/assets/images/Mo/basic/bar_left.png'): require('@/assets/images/Mo/basic/bar_right.png')"
                                 alt="">
                        </div>
                        <img class="tp-gressbgc" src="@/assets/images/Mo/basic/bg_bar.png" alt="">
                    </div>
                    <div class="tp-shop">
<!--                        <div class="shop-left">
                            <img src="@/assets/images/Xun/shop/shop_logo.png" alt="">
                        </div>-->
                        <div class="shop-right">
                            <img src="@/assets/images/Mo/basic/shop_bgc.png" alt="">
                            <div class="actvie">
                                <div class="item">
                                    <img src="@/assets/images/Xun/shop/active.png" alt="">
                                </div>
                                <div class="item">
                                    <img src="@/assets/images/Xun/shop/active.png" alt="">
                                </div>
                                <div class="item">
                                    <img src="@/assets/images/Xun/shop/active.png" alt="">
                                </div>
                                <div class="item">
                                    <img src="@/assets/images/Xun/shop/active.png" alt="">
                                </div>
                                <div class="item">
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
                    <img src="@/assets/images/Mo/basic/tip3.png" alt="">
                </div>
                <div class="te-body">
                    <div class="tb-show">
                        <img class="tb-bgc" src="@/assets/images/Mo/role/role_bgc.png" alt="">
                        <div  class="role-info">
                            <img :src="roleImgUrl.info" alt="">
                        </div>
                        <img class="role-bgc" :src="roleImgUrl.bgc" alt="">
                        <div class="role-sex">
                            <div v-if="roleSex === 1">
                                <div class="rs-mark mark-right " @click="roleSexClick"></div>
                                <img src="@/assets/images/Mo/role/btn_man.png" alt="">
                            </div>
                            <div v-else>
                                <div class="rs-mark mark-left" @click="roleSexClick"></div>
                                <img src="@/assets/images/Mo/role/btn_wuman.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="tb-tab">
                        <div class="left">
                            <img src="@/assets/images/Mo/role/btn_left.png" alt="" @click="prevShowRoleClick">
                        </div>
                        <div class="conter">
                            <img @click="showRoleInfoClick(item, index)" v-for="(item, index) in roleMoImgList" :class="{'no-active': !item.active}" :key="index"
                                 :src="item.active? (roleSex === 1?  item.manIconImageUrl: item.wumanIconImageUrl): item.manIconImageUrl"
                                 alt="">
                        </div>
                        <div class="right">
                            <img src="@/assets/images/Mo/role/btn_right.png" alt="" @click="nextShowRoleClick">
                        </div>
                    </div>
                </div>
            </div>
            <!--  第四部分   -->
            <div class="tip-four">
                <div class="tf-title">
                    <img src="@/assets/images/Mo/basic/tip4.png" alt="">
                </div>
                <div class="tf-body">
                    <MoBanner></MoBanner>
                </div>
            </div>
            <!--  底部 -->
            <footer class="footer">
                <div class="footer-body">
                    <div class="footer-title">
                        活動說明：
                    </div>
                    <p>1.活動截止至遊戲上線前，具體上線時間請關註官方粉絲頁</p>
                    <p>2.一個手機號碼只能申請一次事前登錄，請確保手機號碼填寫</p>
                    <p>3.預約成功後，可以通過“獎勵查詢”查看已獲得的禮包兌換碼，開服後請自行前往遊戲內進行兌換，每個類型禮包僅限兌換一次；</p>
                    <p>4.預約人數達成禮包將在開服後7個工作日內發放全服；</p>
                    <p>5.如果使用不正當手段參與事前登錄獲取活動獎勵，官方將有權取消該用戶獲取的獎勵資格；</p>
                    <p>6.本公司保留變更或終止本活動之權利；</p>
                    <div class="compony-info">
                        <img class="ci-logo" src="@/assets/images/Xun/basic/erniu_logo.png" alt="">
                        <div class="ci-sub">
                            <img src="@/assets/images/Xun/basic/label.jpg" alt="">
                            <div class="ci-text">
                                <span>本遊戲涉及性（角色穿著凸顯性特征之服飾）、暴力、打鬥、虛擬戀愛或結婚情節。</span>
                                <span>遊戲故事純屬虛構，請註意使用時間，避免沈迷於遊戲或不當模仿。</span>
                                <span>遊戲為免責使用，部分內容需另行支付費用，勿用他人代儲以免觸法。</span>
                            </div>
                        </div>
                    </div>
                    <p class="ft-end">Copyright© 2021 Erniu Information Technology Co., Ltd. All rights reserved</p>

                </div>
            </footer>
<!--            <iframe src="" frameborder="0"></iframe>-->
        </div>
        <!-- 预约成功的弹窗  -->
        <transition name="bounce">
            <div class="cl-dialog" v-if="isShowDialog">
                <div class="cd-content">
                    <div class="img-content" v-if="isShowPopType === 'success'">
                        <div class="ic-box">
                            <img src="@/assets/images/Mo/basic/pop_dialog.png" alt="">
                            <div class="ic-btn">
                                <img src="@/assets/images/Mo/basic/ic_pop_google.png" alt="">
                                <img src="@/assets/images/Mo/basic/ic_pop_apple.png" alt="">
                            </div>
                            <img class="close-btn" @click="isShowDialog = false"
                                 src="@/assets/images/Xun/basic/button_close.png" alt="">
                        </div>
                        <div class="ic-role">
                            <img src="@/assets/images/Mo/basic/pop_role.png" alt="">
                        </div>
                    </div>
                    <div class="gift-content" v-else>
                        <div class="gc-body" :style="giftStyleConfig.giftBgc">
                           <div class="gc-list">
                               <div class="gc-item" v-for="(gift, index) in giftList" :key="index">
                                   <div class="gt-left" :style="giftStyleConfig.giftLeftBtnBgc">
                                       <span>{{ gift.label }}</span>
                                   </div>
                                   <div class="gt-right" :style="giftStyleConfig.giftRightBtnBgc">
                                       <span>{{ gift.code }}</span>
                                   </div>
                                   <div class="copy-btn tag-read" @click="copy" :data-clipboard-text="gift.code">
                                       <img src="@/assets/images/Mo/basic/btn_copy.png" alt="">
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
        <div>
            <div class="cl-dialog" :style="{opacity: !isShowPlay? 0: 1 ,zIndex: !isShowPlay? -1: 999}" @click="isShowPlay = false">
                <div style="width: 80vw;height: 80vh" >
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nKbS-u7XWU8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {defineComponent, ref, onBeforeMount, onMounted, watch, getCurrentInstance} from 'vue'
import useMoStyle from "@/hooks/useMoStyle";
import MoBanner from "@/components/MoBanner";
import useCommon from "@/hooks/useCommon";
import usrFacebook from "@/hooks/useFacebook";
export default defineComponent({
    name: "MPc",
    components: {
        MoBanner,
        // Carousel,
        // swiper
    },
    setup() {
        /* 获取样式 */
        const {giftStyleConfig, pcHomeBgc, yButtonBgc, logoBgc, tipInputBgc} = useMoStyle();
        const {phoneList, roleMoImgList, copy, nextToTopClick, nextToRever} = useCommon();
        const {onFBLogin} = usrFacebook();
        const imgList = ref([
            {url: 'http://xlwy.leniu.com/upload/xlwy/images/20190924/1569331444201301.png', class: 'first'},
            {url: 'http://xlwy.leniu.com/upload/xlwy/images/20190924/1569332001763258.png', class: '',},
            {url: 'http://xlwy.leniu.com/upload/xlwy/images/20190924/1569331347230177.png', class: '',},
        ])
        const progressList = ref([
            {left: '6px', transfrom: 'rotate(0deg)'},
            {left: '-24px', transfrom: 'rotate(180deg)'},
            {left: '-20px', transfrom: 'rotate(0deg)'},
            {left: '-24px', transfrom: 'rotate(180deg)'},
            {left: '-20px', transfrom: 'rotate(0deg)'},
            {left: '-24px', transfrom: 'rotate(0deg)'},
            {left: '-20px', transfrom: 'rotate(0deg)'},
            {left: '-24px', transfrom: 'rotate(0deg)'},
            {left: '-20px', transfrom: 'rotate(0deg)'},
        ])
        const text = ref('123')
        const numId = ref('台灣');
        const inputPlacholder = ref('台灣');
        const phoneNumber = ref('');
        // 是否同意
        const agree = ref(false);
        const loading = ref(false);
        // 是否显示
        const isShowPlay = ref(false);
        // 角色展示信息
        const roleImgUrl = ref({
            info: '',
            bgc: ''
        });
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
            {label: '預約禮包', code: 'VIP888'},
            {label: '預約禮包', code: 'VIP888'},
        ])
        const roleSexClick = () => {
            roleSex.value = roleSex.value === 1 ? roleSex.value = 2 : roleSex.value = 1;
            roleMoImgList.value.forEach(val => {
                if (val.active) {
                    roleImgUrl.value.info = roleSex.value === 1 ? val.manImageUrl : val.womanImageUrl;
                    roleImgUrl.value.bgc = roleSex.value === 1 ? val.imgBgcUrl : val.imgBgcUrl;
                }
            })
        }
        const showRoleInfoClick = (item, index) => {
            roleMoImgList.value.forEach(val => {
                val.active = false;
            })
            roleActiveIndex.value = index;
            item.active = true;
            roleImgUrl.value.info = roleSex.value === 1 ? item.manImageUrl : item.womanImageUrl;
            roleImgUrl.value.bgc = roleSex.value === 1 ? item.imgBgcUrl : item.imgBgcUrl;

        }
        const prevShowRoleClick = () => {
            if (roleActiveIndex.value > 0) {
                roleActiveIndex.value -= 1;
            } else {
                roleActiveIndex.value = roleMoImgList.value.length - 1;
            }
            roleMoImgList.value.forEach(val => {
                val.active = false;
            })
            roleMoImgList.value[roleActiveIndex.value].active = true;
            roleImgUrl.value.info = roleSex.value === 1 ? roleMoImgList.value[roleActiveIndex.value].manImageUrl : roleMoImgList.value[roleActiveIndex.value].womanImageUrl;
            roleImgUrl.value.bgc = roleSex.value === 1 ? roleMoImgList.value[roleActiveIndex.value].imgBgcUrl : roleMoImgList.value[roleActiveIndex.value].imgBgcUrl;
        }
        // 下一个
        const nextShowRoleClick = () => {
            if (roleActiveIndex.value < roleMoImgList.value.length - 1) {
                roleActiveIndex.value += 1;
            } else {
                roleActiveIndex.value = 0;
            }
            roleMoImgList.value.forEach(val => {
                val.active = false;
            })
            roleMoImgList.value[roleActiveIndex.value].active = true;
            roleImgUrl.value.info = roleSex.value === 1 ? roleMoImgList.value[roleActiveIndex.value].manImageUrl : roleMoImgList.value[roleActiveIndex.value].womanImageUrl;
            roleImgUrl.value.bgc = roleSex.value === 1 ? roleMoImgList.value[roleActiveIndex.value].imgBgcUrl : roleMoImgList.value[roleActiveIndex.value].imgBgcUrl;
        }

        const playVideoClick = () => {
            isShowPlay.value = true;
        }
        onBeforeMount(() => {
            roleMoImgList.value.forEach(val => {
                if (val.active) {
                    roleImgUrl.value.info = roleSex.value === 1 ? val.manImageUrl : val.womanImageUrl;
                    roleImgUrl.value.bgc = roleSex.value === 1 ? val.imgBgcUrl : val.imgBgcUrl;
                }
            })
        })
        onMounted(() => {
            console.log(phoneList.value);
            // let myPlayer = proxy.$video('my-video', {
            //     techOrder:["youtube"],
            //     sources: [{
            //         type: "video/youtube",
            //         url: 'https://www.youtube.com/watch?v=xjS6SftYQaQ'
            //     }],
            //     // youtube: {playlist: "2_HXUhShhmY,lLJf9qJHR3E"},自定义播放列表
            //     height:550,
            //     width:1000,
            //     controls : true/false,
            //     loop:true,//循环播放
            //     autoplay:true,//自动播放
            //     playsinline: 1,//禁止在IOS app 上自动全屏
            //     muted: false
            //     }, function onPlayerReady() {
            //         this.play();
            //     });
                // //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
                // controls: true,
                // //自动播放属性,muted:静音播放
                // autoplay: "muted",
                // //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
                // preload: "auto",
                // //设置视频播放器的显示宽度（以像素为单位）
                // width: "800px",
                // //设置视频播放器的显示高度（以像素为单位）
                // height: "400px"
            // });
           /* console.log(btn);
            btn.style.width = '175px';
            btn.style.height = '54px';*/
            /* console.log(document.getElementsByTagName('iframe'));*/
        })
        return {
            logoBgc,
            yButtonBgc,
            tipInputBgc,
            pcHomeBgc,
            numId,
            agree,
            progressList,
            loading,
            text,
            imgList,
            roleImgUrl,
            roleSex,
            roleMoImgList,
            isShowDialog,
            isShowPopType,
            giftStyleConfig,
            giftList,
            phoneList,
            phoneNumber,
            inputPlacholder,
            isShowPlay,
            nextToRever,
            playVideoClick,
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
.home {
    height: 5564px;
    //background: url("../../images/bgc.jpg") no-repeat center;
    padding: 1px 0;
    .home-body {
        position: relative;
        padding: 1px 0;
        .left-button {
            position: fixed;
            top: 75px;
            right: 16px;
            z-index: 10;
            height: 765px;
            .mark {
                height: 395px;
                position: absolute;
                right: 57px;
                width: 300px;
                margin-top: -50px;
                z-index: 11;
                text-align: center;
                opacity: 1;
                a {
                    display: flex;
                    text-align: center;
                    width: 100%;
                    height: 60px;
                    margin-top: 6px;
                    border-radius: 40px;
                    &:active {
                        transform: scale(0.95);
                    }
                }
                div{
                    margin-top: 12px;
                    width: 100%;
                    height: 80px;
                    border-radius: 20px;
                    &:active {
                        transform: scale(0.95);
                    }
                }
            }
        }
        .header {
            display: flex;
            margin-top: 620px;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            .img-box {
                position: relative;
                display: flex;
                justify-content: center;
            }
            .btn-box {
                margin-top: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                .yu-button{
                    height: 124px;
                    width: 420px;
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                    animation: anima-scale 2s;
                    animation-iteration-count: infinite;
                    strong {
                        margin-bottom: 18px;
                        font-size: 28px;
                        font-weight: bold;
                        font-style: italic;
                        margin-left: 10px;
                        color: #1149E8;
                        font-family: mySecondFont;
                    }
                }
                img {
                    margin-left: 26px;
                    width: 114px;
                    height: 107px;
                    animation: anima-scale 2s;
                    animation-iteration-count: infinite;
                }
            }
        }
        .tip-one{
            margin-top: 157px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            width: 100%;
            overflow-x: clip;
            .to-title {
                text-align: left;
                width: 100%;
                img{
                    width: 50%;
                    height: 100px;
                }
            }
            .tip-body {
                position: relative;
                width: 1200px;
                height: 392px;
                margin-top: 40px;
                .tb-bx {
                    position: absolute;
                    right: -128px;
                    width: 286px;
                    height: 286px;
                    top: 50px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                img {
                    width: 1138px;
                    height: 420px;
                    position: absolute;
                    left: 0;
                }
                .input-info {
                    display: flex;
                    width: 482px;
                    left: 38px;
                    top: 160px;
                    padding: 2px 0;
                    position: absolute;
                    font-family: mySecondFont;
                     :deep(.el-input__suffix) {
                        top: 9px;
                        right: 12px;
                        font-size: 24px;
                    }
                    .num-title {
                        :deep(.el-select .el-input) {
                            width: 200px;
                            height: 66px;
                        }
                        :deep(.el-input__inner) {
                            border: 0;
                            background-color: rgba(0, 0, 0, 0);
                            height: 66px;
                            font-size: 24px;
                            line-height: 66px;
                            letter-spacing: 0.02em;

                        }
                        :deep(.el-input__suffix-inner){
                            color: #000;
                        }
                        :deep(.el-icon-arrow-up:before) {
                            content: "";
                            color: #000;
                            font-size: 24px;
                        }
                    }
                    .num-input {
                        margin-left: 12px;
                        width: 270px;
                        height: 66px;
                        :deep(.el-input) {
                            font-size: 24px;
                            width: 270px;
                            height: 66px;
                            line-height: 66px;
                        }
                        :deep(.el-input__inner) {
                            border: 0;
                            background-color: rgba(0, 0, 0, 0);
                            height: 66px;
                            margin-left: 8px;
                            letter-spacing: 0.12em;
                        }
                    }

                    /*.el-select .el-input__inner {
                      margin-right: 0;
                    }*/
                }
                .agree {
                    position: absolute;
                    bottom: 132px;
                    left: 132px;
                    display: flex;
                    align-items: center;
                    font-weight: bold;
                    .check {
                        width: 22px;
                        height: 22px;
                        box-sizing: border-box;
                        border: 2px solid #F5BF9E;
                        border-radius: 4px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-right: 12px;
                        .inner-check{
                            width: 16px;
                            height: 16px;
                        }
                        .is_checkd {
                            background: #F5BF9E;
                        }
                    }
                    span {
                        font-size: 18px;
                        color: #4F4F3B;
                        font-family: myFirstFont;
                        font-weight: 540;
                    }
                }
                .reserve-btn {
                    position: absolute;
                    bottom: 70px;
                    left: 107px;
                    animation: anima-scale 2s;
                    animation-iteration-count: infinite;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 300px;
                    img {
                        width: 316px;
                        height: 83px;
                    }
                    &:active{
                        -webkit-transform: scale(0.95,0.95);
                        transform: scale(0.95,0.95);


                    }
                }
            }
            .share-panel {
                margin-top: 26px;
                width: 1200px;
                height: 324px;
                padding-right: 62px;
                box-sizing: border-box;
                .share-content {
                    display: flex;
                    .like-box, .share-box{
                        position: relative;
                        flex: 1;
                       /* img {
                            height: 282px;
                            width: 541px;
                        }*/
                    }
                    .like-box {
                        text-align: center;
                        .like-btn {
                            //background: #1086FF;
                            position: absolute;
                            width: 175px;
                            height: 54px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border-radius: 6px;
                            left: 180px;
                            top: 74px;
                        /*    :deep(.fb-like) {
                                  opacity: 1;
                                  span {
                                    width: 100% !important;
                                    height: 100% !important;
                                  }
                                  iframe{
                                    width: 100% !important;
                                    height: 100% !important;
                                      :deep(body.plugin) {
                                      width: 175px !important;
                                      height: 54px !important;
                                    }
                                  }
                                }
                                :deep(.fb-like ._89n_) {
                                  background: #1086FF;
                                }*/
                            .like-icon {
                                width: 32px;
                                height: 32px;
                                margin-right: 18px;
                                margin-left: 21px;
                            }
                            .like-span {
                                color: #fff;
                                font-weight: 600;
                                font-size: 20px;
                            }
                        }
                    }
                    .share-box {
                        .share-btn {
                            position: absolute;
                            left: 102px;
                            top: 74px;
                            img {
                                width: 346px;
                                height: 54px;
                            }
                            &:active{
                                transform: scale(0.95,0.95)
                            }
                        }
                    }
                    .share-box {
                        margin-left: 6px;
                    }
                }
                .share-tips {
                    font-size: 20px;
                    float: right;
                    color: #fff;
                    font-family: mySecondFont;
                }

            }
        }
        .tip-two {
            margin-top: 30px;
            width: 100%;
            height: 1025px;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow-x: clip;
            .tt-title {
                text-align: left;
                width: 100%;
                img{
                    width: 50%;
                    height: 100px;
                }
            }
            .tt-progress {
                width: 1200px;
                .tp-num {
                    text-align: right;
                    margin-right: 12px;
                    margin-top: 20px;
                    span {
                        font-size: 24px;
                        font-weight: bold;
                        color: #fff;
                        text-shadow:  0 0 10px #DEDEDE;
                        strong {
                            margin-bottom: 16px;
                            font-size: 2.6rem;
                            color: #fff;
                            -webkit-text-stroke: 1px #fff;
                            text-shadow:  0 0 10px #DEDEDE;
                            font-family: myThreeFont;
                        }
                    }
                }
                .tp-gress {
                    width: 100%;
                    position: relative;
                    margin-top: 34px;
                    .tp-icon {
                        position: absolute;
                        top: 5px;
                        left: 3px;
                        z-index: 3;
                        img {
                            width: 60px;
                            height: 50px;
                        }
                    }
                    .tp-gressbgc {
                        position: absolute;
                        left: 0;
                        z-index: 2;
                        img{
                            height: 64px;
                        }
                    }
                }
                .tp-shop {
                    width: 1200px;
                    position: relative;
                    display: flex;
                    margin-top: 215px;
                    .shop-right {
                        display: flex;
                        width: 100%;
                        margin-left: 20px;
                        .actvie {
                            display: flex;
                            position: absolute;
                            .item {
                                height: 460px;
                                width: 235px;
                                margin-left: 5px;
                                position: relative;
                                img {
                                    position: absolute;
                                    bottom: -50px;
                                    right: -15px;
                                    width: 120px;
                                }
                               &:nth-child(even){
                                   margin-top: 90px;
                                   img {
                                       position: absolute;
                                       top: -50px;
                                       right: -15px;
                                       width: 120px;
                                   }
                               }
                            }

                        }
/*
                        .shop-one, .shop-two{
                            width: 250px;
                            height: 690px;
                            margin: 0 10px;
                            position: relative;
                            .img-two {
                                margin-top: 20px;
                            }
                        }
                        .shop-three {
                            margin: 0 10px;
                            position: relative;
                            width: 290px;
                            height: 690px;
                            .img-big {
                                width: 290px;
                                height: 690px;
                            }
                            .active {
                                position: absolute;
                                top: 54px;
                                right: -25px;
                                z-index: 5;
                            }
                        }*/
                    }
                }

            }
        }
        .tip-three {
            margin-top: 180px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            .te-title {
                text-align: left;
                width: 100%;
                img{
                    width: 50%;
                    height: 100px;
                }
            }
            .te-body {
                width: 1200px;
                text-align: center;
                .tb-show {
                    position: relative;
                    margin-top: -40px;
                    text-align: center;
                    .role-info {
                        position: absolute;
                        left: 0;
                        top: -20px;
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        img {
                            height: 764px;
                            margin-top: -50px;
                            -webkit-animation: bounce-down 1.6s linear infinite;
                            animation: bounce-down 1.6s linear infinite;
                        }
                        @-webkit-keyframes bounce-down {
                            25% {
                                -webkit-transform: translateY(-4px);
                            }
                            50%, 100% {
                                -webkit-transform: translateY(0);
                            }
                            75% {
                                -webkit-transform: translateY(4px);
                            }
                        }
                        @keyframes bounce-down {
                            25% {
                                transform: translateY(-4px);
                            }
                            50%, 100% {
                                transform: translateY(0);
                            }
                            75% {
                                transform: translateY(4px);
                            }
                        }
                    }
                    .role-bgc {
                        width: 100%;
                        position: absolute;
                        left: 0;
                        top: -20px;
                    }
                    .role-sex {
                        position: absolute;
                        right: 90px;
                        top: 120px;
                        .rs-mark {
                            width: 73px;
                            height: 40px;
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
                    margin-top: -50px;
                    .left {
                        margin-left: 40px;
                    }
                    .left, .right {
                        img {
                            width: 50px;
                            &:active{
                                transform: scale(0.95);
                            }
                        }
                    }
                    .conter {
                        flex: 1;
                        display: flex;
                        justify-content: space-around;
                        img {
                            width: 135px;
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
        .tip-four{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 880px;
            margin-top: 40px;
            .tf-title {
                text-align: left;
                width: 100%;
                img{
                    width: 50%;
                    height: 100px;
                }
            }
            .tf-body {
                width: 1200px;
                padding-left: 180px;
                padding-top: 132px;
                box-sizing: border-box;
            }
        }
        .footer {
            display: flex;
            justify-content: center;
            margin-top: 50px;
            .footer-body {
                text-align: left;
                padding-left: 182px;
                width: 1200px;
                .footer-title {
                    font-size: 30px;
                    color: #fff;
                    font-family: mySecondFont;
                    margin-bottom: 24px;
                }
                p {
                    color: #FFF;
                    margin-bottom: 15px;
                    font-size: 20px;
                    font-family: mySecondFont;
                }
                .compony-info {
                    margin-top: 35px;
                    display: flex;
                    padding-left: 30px;
                    width: 1017px;
                    height: 70px;
                    .ci-logo {
                        height: 70px;
                    }
                    .ci-sub {
                        margin-left: 22px;
                        margin-top: 6px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        .ci-text {
                            margin-left: 12px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            span {
                                color: #fff;
                                font-size: 14px;
                                display: inline-block;
                                padding: 2px 0;
                            }
                        }
                    }
                }
                .ft-end {
                    color: #FFF;
                    font-size: 14px;
                    margin-top: 30px;
                    font-family: mySecondFont;
                    margin-left: 212px;
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
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: space-around;
        overflow-x: clip;
        i {
            font-size: 88px;
            color: #fff;
        }
        .cd-content {
            //height: 800px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .img-content {
                width: 1200px;
                display: flex;
                position: relative;
                .ic-box {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    img:first-child {
                        width: 930px;
                    }
                    .ic-btn {
                        position: absolute;
                        display: flex;
                        bottom: 151px;
                        z-index: 2;
                        left: 96px;
                        img {
                            width: 255px;
                            height: 77px;
                            margin-left: 12px;
                        }

                    }
                    .close-btn {
                        width: 50px;
                    }
                }

                .ic-role {
                    position: absolute;
                    right: 40px;
                    top: -45px;
                    img {
                        width: 94%;
                    }
                }
                //img {
                //  width: 70%;
                //}
            }
            .gift-content {
                width: 1200px;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                .gc-body {
                    width: 923px;
                    height: 540px;
                    padding: 155px 47px 34px 47px;
                    box-sizing: border-box;
                    font-size: 24px;
                    font-weight: bold;
                    color: #1D1D1D;
                    font-family: mySecondFont;
                    .gc-list {
                        height: 100%;
                        width: 100%;
                        overflow-y: scroll;
                        .gt-left {
                            width: 182px;
                            height: 74px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                        .gt-right {
                            width: 400px;
                            height: 74px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            position: relative;
                        }
                        .copy-btn {
                            display: flex;
                            align-items: center;
                            margin-right: 20px;
                            img {
                                width: 106px;
                                height: 50px;
                                &:active {
                                    transform: scale(0.95,0.95)
                                }
                            }

                        }
                        .gc-item {
                            display: flex;
                            justify-content: space-around;
                            margin-top: 10px;
                        }
                    }
                    .gc-list::-webkit-scrollbar {
                        display: none;
                    }

                }
                .close-btn {
                    width: 50px;
                }
            }
        }
    }
}

@media screen and (min-width: 1400px) and (max-width: 1680px){
    .home {
        .logo {
            div {
                background-size: cover;
            }
        }
    }
}
@media screen and (min-width: 1200px) and (max-width: 1400px){
    .home {
        .logo {
            img {
                margin-right: 20px;
                margin-top: 24px;
            }
        }
    }
}

</style>
