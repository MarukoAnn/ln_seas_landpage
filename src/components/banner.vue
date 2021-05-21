<template>
    <section class="carousel">
        <figure class="icon-cards">
            <div :class="{'icon-cards__content': true}">
                <div  :class="['icon-cards__item', item.rotate % 360 === 0? 'active': '']" v-for="(item,index) in imgList" :key="index" :style="{ '-webkit-transform': `rotateY(${item.rotate}deg) translateZ(382px)`, transform: `rotateY(${item.rotate}deg) translateZ(382px);`}">
                    <img :style="{'width': '100%', 'height': item.rotate % 360 !== 0? '350px': '350px'}" :src="item.url" alt="" >
                    <div v-if="item.rotate % 360 !== 0"
                         style="background: rgba(231,246,214,0.7);width: 100%;height: 350px;position: absolute;top: 0">
                    </div>
                </div>
            </div>
            <img src="@/assets/images/swiper/btn_pre.png" alt="" @click="prev" style="position: absolute; top: 30vh;left: -120px">
            <img src="@/assets/images/swiper/btn_next.png" alt=""  @click="next" style="position: absolute; top: 30vh;right: -100px">
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
            {url: require('@/assets/images/swiper/pic1.jpg'), active: true, rotate: 0},
            {url: require('@/assets/images/swiper/pic2.jpg'), active: false, rotate: 120},
            {url: require('@/assets/images/swiper/pic3.jpg'), active: false, rotate: 240},

         /*   {url: require('@/assets/images/swiper/pic1.jpg'), active: true, rotate: 120},
            {url: require('@/assets/images/swiper/pic2.jpg'), active: false, rotate: 240},
            {url: require('@/assets/images/swiper/pic3.jpg'), active: false, rotate: 360},

            {url: require('@/assets/images/swiper/pic1.jpg'), active: true, rotate: 240},
            {url: require('@/assets/images/swiper/pic2.jpg'), active: false, rotate: 360},
            {url: require('@/assets/images/swiper/pic3.jpg'), active: false, rotate: 720},*/

            {url: require('@/assets/images/swiper/pic4.jpg'), active: false, rotate: 360},
            {url: require('@/assets/images/swiper/pic5.jpg'), active: false, rotate: 360},
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
            let flag = ''
            imgList.value.forEach((val, index) => {
                if ([0,1,2].includes(index) && val.rotate % 360 !== 0) {
                    flag = index;
                }
            })
            if (flag !== ''){
                imgList.value[3] = imgList.value.splice(flag, 1, imgList.value[3])[0]
                imgList.value[3].rotate = imgList.value[flag].rotate;
                imgList.value.splice(flag, 0, imgList.value[3]);
                imgList.value.push(imgList.value[flag]);
                imgList.value.splice(flag, 1);
            }
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
.carousel {
    display: flex;
    position: relative;
    justify-content: center;
    .icon-cards {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 800px;
        height: 200px;
        -webkit-perspective: 1600px;
        perspective: 1600px;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        .icon-cards__content {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
            -webkit-transform: translateZ(-282px) rotateY(0);
            transform: translateZ(-282px) rotateY(0);

        }
        .icon-cards__item {
            position: absolute;
            top: 0;
            left: 0;
            width: 800px;
            height: 200px;
            border-radius: 6px;
            transition: 0.6s;

        }
        .icon-cards__item:nth-child(4), .icon-cards__item:nth-child(5){
            display: none;
        }
        .active{
            box-sizing: border-box;
            margin-top: 120px;
            padding: 0 70px;

        }
    }
    .card-point {
        position: absolute;
        bottom: -500px;
        display: flex;
       .point{
           width: 27px;
           height: 27px;
           border-radius: 50%;
           background: #999999;
           margin: 0 19px;
       }
       .active {
           width: 80px;
           height: 27px;
           border-radius: 20px;
           background: #FEE647;
           margin: 0 19px;
       }
    }
}
</style>
