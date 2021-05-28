<template>
    <section class="carousel">
        <figure class="icon-cards">
            <div :class="{'icon-cards__content': true}">
                <div  :class="['icon-cards__item', item.class]" v-for="(item,index) in imgList" :key="index" >
                    <img :style="{'width': '100%'}" :src="item.url" alt="" >
                    <div v-if="item.class !== 'center'" class="mark">
                    </div>
                </div>
            </div>
            <img class="btn_left" src="@/assets/images/Xun/swiper/btn_pre.png" alt="" @click="prev">
            <img class="btn_right" src="@/assets/images/Xun/swiper/btn_next.png" alt=""  @click="next">
        </figure>
        <div class="card-point">
            <div :class="{point: activeIndex !== point_index, active: activeIndex === point_index}" v-for="(item, point_index) in imgList" :key="point_index"></div>
        </div>
    </section>
</template>

<script>
import {defineComponent, ref, onMounted} from 'vue';
export default defineComponent({
    name: "banner",
    setup(){
        const imgList = ref([
            {url: require('@/assets/images/Mo/swiper/pic1.jpg'), class: 'right'},
            {url: require('@/assets/images/Mo/swiper/pic2.jpg'), class: 'center'},
            {url: require('@/assets/images/Mo/swiper/pic3.jpg'), class: 'left'},
            {url: require('@/assets/images/Mo/swiper/pic4.jpg'), class: 'other'},
            {url: require('@/assets/images/Mo/swiper/pic5.jpg'), class: 'other1'},
        ])
        // const
        const classList = ref([
            'right','center','left','other','other1'
        ])
        const timerOut = ref('')
        // const
        const activeIndex = ref(0);
        const next = () => {
            if (activeIndex.value < imgList.value.length -1){
                activeIndex.value += 1;
            }else {
                activeIndex.value = 0;
            }
            imgList.value.forEach(val => {
                let index = classList.value.indexOf(val.class);
                if (index < classList.value.length - 1) {
                    val.class = classList.value[index + 1];
                }else {
                    val.class = classList.value[0];
                }
            })

        }
        const prev = () => {
            if (activeIndex.value > 0){
                activeIndex.value -= 1;
            }else {
                activeIndex.value = imgList.value.length -1;
            }
            imgList.value.forEach(val => {
                let index = classList.value.indexOf(val.class);
                if (index > 0) {
                    val.class = classList.value[index - 1];
                }else {
                    val.class = classList.value[classList.value.length -1];
                }
            })
        };
        const clearInter = () => {
            clearInterval(timerOut.value)
        }
        const startInter = () => {
            timerOut.value = setInterval(() => {
                next();
            }, 3000)
        }
        onMounted(() => {
            startInter();
        })
        return {
            imgList,
            activeIndex,
            clearInter,
            startInter,
            next,
            prev
        }
    }
})
</script>

<style scoped lang="scss">
@function pxtovw($args) {
    @return ($args / 750) * 100vw;
}
.carousel {
    display: flex;
    position: relative;
    justify-content: center;
    box-sizing: border-box;
    .icon-cards {
        position: absolute;
        top: 0;
        left: 50%;
        width: pxtovw(600);
        height: pxtovw(200);
        -webkit-perspective: pxtovw(1200);
        perspective: pxtovw(1200);
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        .icon-cards__content {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
            -webkit-transform: translateZ(pxtovw(-382)) rotateY(0);
            transform: translateZ(pxtovw(-382)) rotateY(0);

        }
        .icon-cards__item {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 6px;
            transition: 0.6s;
            img {
                height: pxtovw(340);
            }
        }
        .left{
            -webkit-transform: translateX(118px) translateZ(-122px) rotateY(-55deg);
            transform: translateX(110px) translateZ(-122px) rotateY(-55deg);
            opacity: 1;
        }
        .center{
            //box-sizing: border-box;
            margin-top: pxtovw(120);
            //padding: 0 80px;
            -webkit-transform: translateX(0) translateZ(0) rotateY(0);
            transform: translateX(0) translateZ(0) rotateY(0);
            opacity: 1;
        }
        .right{
            -webkit-transform: translateX(-118px) translateZ(-122px) rotateY(55deg);
            transform: translateX(-118px) translateZ(-122px) rotateY(55deg);
            opacity: 1;
        }
        .other, .other1{
            -webkit-transform: translateX(-350px) translateZ(-400px) rotateY(45deg);
            transform: translateX(-350px) translateZ(-400px) rotateY(45deg);
            opacity: 0;
        }
        .mark {
            background: rgba(170,182,218,0.7);
            width: 100%;
            height: pxtovw(340);
            position: absolute;
            top: 0
        }
        .btn_left {
            position: absolute;
            top: pxtovw(100);
            left: pxtovw(-100);
            opacity: 0;
        }
        .btn_right {
            position: absolute;
            top: pxtovw(100);
            right: pxtovw(-100);
            opacity: 0;
        }
        .active{
            box-sizing: border-box;
            margin-top: pxtovw(100);
            padding: 0 pxtovw(42);
        }
    }
    .card-point {
        position: absolute;
        top: pxtovw(300);
        display: flex;
        .point{
            width: pxtovw(20);
            height: pxtovw(20);
            border-radius: 50%;
            background: #999999;
            margin: 0 pxtovw(10);
        }
        .active {
            width: pxtovw(60);
            height: pxtovw(20);
            border-radius: pxtovw(20);
            background: #FEE647;
            margin: 0 pxtovw(10);
        }
    }
}
</style>
