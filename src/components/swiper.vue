<template>
    <section class="carousel">
        <figure class="icon-cards">
            <div :class="{'icon-cards__content': true}">
                <div  :class="['icon-cards__item', item.rotate % 360 === 0? 'active': '']" v-for="(item,index) in imgList" :key="index" :style="{ '-webkit-transform': `rotateY(${item.rotate}deg) translateZ(122px)`, transform: `rotateY(${item.rotate}deg) translateZ(122px);`}">
                    <img  :src="item.url" alt="" >
                    <div v-if="item.rotate % 360 !== 0" class="mark">
                    </div>
                </div>
            </div>
            <img class="left" src="@/assets/images/Xun/swiper/btn_pre.png" alt="" @click="prev">
            <img class="right" src="@/assets/images/Xun/swiper/btn_next.png" alt=""  @click="next">
        </figure>
        <div class="card-point">
            <div :class="{point: !item.active, active: item.active}" v-for="(item, point_index) in imgList" :key="point_index"></div>
        </div>
    </section>
</template>

<script>
import {defineComponent, ref, onMounted} from 'vue';
export default defineComponent({
    name: "banner",
    setup(){
        const imgList = ref([
            {url: require('@/assets/images/Xun/swiper/pic1.jpg'), active: true, rotate: 0},
            {url: require('@/assets/images/Xun/swiper/pic2.jpg'), active: false, rotate: 120},
            {url: require('@/assets/images/Xun/swiper/pic3.jpg'), active: false, rotate: 240},

            /*   {url: require('@/assets/images/swiper/pic1.jpg'), active: true, rotate: 120},
               {url: require('@/assets/images/swiper/pic2.jpg'), active: false, rotate: 240},
               {url: require('@/assets/images/swiper/pic3.jpg'), active: false, rotate: 360},

               {url: require('@/assets/images/swiper/pic1.jpg'), active: true, rotate: 240},
               {url: require('@/assets/images/swiper/pic2.jpg'), active: false, rotate: 360},
               {url: require('@/assets/images/swiper/pic3.jpg'), active: false, rotate: 720},*/

            {url: require('@/assets/images/Xun/swiper/pic4.jpg'), active: false, rotate: 360},
            {url: require('@/assets/images/Xun/swiper/pic5.jpg'), active: false, rotate: 360},
        ])
        // const
        const isAni = ref(false);
        const activeIndex = ref(0);
        const next = () => {
            if (activeIndex.value < imgList.value.length - 1){
                activeIndex.value += 1;
            }else {
                activeIndex.value = 0;
            }
            imgList.value.forEach(val => {
                val.rotate += 120;
                val.active = false;
            })
            imgList.value[activeIndex.value].active = true;
            // let flag = ''
            // imgList.value.forEach((val, index) => {
            //     if ([0,1,2].includes(index) && val.rotate % 360 !== 0) {
            //         flag = index;
            //     }
            // })
            // if (flag !== ''){
            //     imgList.value[3] = imgList.value.splice(flag, 1, imgList.value[3])[0]
            //     imgList.value[3].rotate = imgList.value[flag].rotate;
            //     imgList.value.splice(flag, 0, imgList.value[3]);
            //     imgList.value.push(imgList.value[flag]);
            //     imgList.value.splice(flag, 1);
            // }
            /*            imgList.value.unshift(imgList.value[activeIndex.value]);
                        imgList.value.splice(activeIndex.value + 1, 1);*/
            // imgList.value.forEach((val,index) => {
            //     if (index > 0){
            //         val.rotate = imgList.value[index -1].rotate + 120;
            //     }
            // })

            console.log(imgList.value);

        }
        const prev = () => {
            if (activeIndex.value > 0){
                activeIndex.value -= 1;
            }else {
                activeIndex.value =  imgList.value.length -1;
            }
            imgList.value.forEach(val => {
                val.rotate -= 120;
                val.active = false;
            })
            imgList.value[activeIndex.value].active = true;
        };

        onMounted(() => {
            // setInterval(() => {
            //     next();
            // }, 3000)
        })
        return {
            imgList,
            isAni,
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
        top: 50%;
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
            -webkit-transform: translateZ(pxtovw(-182)) rotateY(0);
            transform: translateZ(pxtovw(-182)) rotateY(0);

        }
        .icon-cards__item {
            position: absolute;
            top: 0;
            left: 0;
            width: 104%;
            height: 100%;
            border-radius: 6px;
            transition: 0.6s;
            img {
                width: 104%;
                height: pxtovw(283);
            }
        }
        .icon-cards__item:nth-child(4), .icon-cards__item:nth-child(5){
            display: none;
        }
        .mark {
            background: rgba(231,246,214,0.7);
            width: 104%;
            height: pxtovw(283);
            position: absolute;
            top: 0;
            z-index: 2;
        }
        .left {
            width: pxtovw(80);
            position: absolute;
            top: pxtovw(200);
            left: pxtovw(-60);
        }
        .right {
            width: pxtovw(80);
            position: absolute;
            top: pxtovw(200);
            right: pxtovw(-60);
        }
        .active{
            box-sizing: border-box;
            margin-top: pxtovw(100);
            padding: 0 pxtovw(70);
        }
    }
    .card-point {
        position: absolute;
        top: pxtovw(350);
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
