<template>
    <section class="carousel">
        <figure class="icon-cards">
            <div :class="{'icon-cards__content': true}">
                <img :src="item.url" alt="" :class="['icon-cards__item']" v-for="(item,index) in imgList" :key="index"
                :style="{ '-webkit-transform': `rotateY(${item.rotate}deg) translateZ(382px)`, transform: `rotateY(${item.rotate}deg) translateZ(382px);`}">
                <!--            <div class="icon-cards__item"></div>-->
                <!--            <div class="icon-cards__item"></div>-->
            </div>
            <button @click="next" style="position: absolute; top: 34vh">下一个</button>
            <button @click="prev" style="position: absolute; top: 35vh">上一个</button>
        </figure>
    </section>
</template>

<script>
import {defineComponent, ref, onMounted} from 'vue';
export default defineComponent({
    name: "banner",
    setup(){
        const imgList = ref([
            {url: require('@/assets/images/swiper/pic1.jpg'), class: 'first', flag: 0, rotate: 0},
            {url: require('@/assets/images/swiper/pic2.jpg'), class: 'second', flag: 1, rotate: 120},
            {url: require('@/assets/images/swiper/pic3.jpg'), class: 'three',  flag: 2, rotate: 240},
            // {url: require('@/assets/images/swiper/pic4.jpg'), class: 'four', flag: 3, rotate: 360},
            // {url: require('@/assets/images/swiper/pic5.jpg'), class: 'first', flag: 0, rotate: 480},
        ])
        // const
        const isAni = ref(false);
        const isLeftAni = ref(false);
        const next = () => {
            imgList.value.forEach(val => {
                val.rotate += 120;
            })
        }
        const prev = () => {
            imgList.value.forEach(val => {
                val.rotate -= 120;
            })
        };

        onMounted(() => {
            // setInterval(() => {
            //     next();
            // }, 3000)
        })
        return {
            imgList,
            isAni,
            isLeftAni,
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
    margin-top: 20vh;
    .icon-cards {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 700px;
        height: 200px;
        -webkit-perspective: 800px;
        perspective: 800px;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    .icon-cards__content {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transform: translateZ(-282px) rotateY(0);
        transform: translateZ(-282px) rotateY(0);

    }
    .swiper-ani {
        -webkit-animation: carousel 1s linear ;
        animation: carousel 1s linear ;
        animation-fill-mode:forwards;
        -webkit-animation-fill-mode:forwards;
    };
    .swiper-ani-left {
        -webkit-animation: carousel-left 1s linear ;
        animation: carousel-left 1s linear ;
        animation-fill-mode:forwards;
        -webkit-animation-fill-mode:forwards;
    };
    .first-start {
        animation: ani-first 0.5s linear forwards;
    }
    .first-end {
        animation: ani-first-end 0.5s linear forwards;
    }
    .icon-cards__item {
        position: absolute;
        top: 0;
        left: 0;
        width: 700px;
        //height: 200px;
        border-radius: 6px;
        opacity: 0.6;
        transition: 0.6s;

    }
    .first {
        -webkit-transform: rotateY(0) translateZ(382px);
        margin-top: 80px;
        padding: 0 30px;
        opacity: 1;
        transition: 0.4s;
    }
    .second {
        -webkit-transform: rotateY(120deg) translateZ(382px);
        transform: rotateY(120deg) translateZ(382px);
        transition: 0.4s;
    }
    .three {
        -webkit-transform: rotateY(240deg) translateZ(382px);
        transform: rotateY(240deg) translateZ(382px);
        transition: 0.4s;
    }
    .four {
        -webkit-transform: rotateY(360deg) translateZ(382px);
        transform: rotateY(360deg) translateZ(382px);
        margin-top: 80px;
        padding: 0 30px;
        opacity: 1;
        transition: 0.4s;
    }
    //.five {
    //    -webkit-transform: rotateY(0deg) translateZ(382px);
    //    transform: rotateY(0deg) translateZ(382px);
    //    transition: 0.4s;
    //}
    .icon-cards__item:nth-child(4), .icon-cards__item:nth-child(5){
        display: none;
    }
    .first{
        box-sizing: border-box;
        //width: 400px;
    }
    @keyframes ani-first {
        0%{
            margin-top: 0;
            padding: 0;
            opacity: 0.5;
        }
        100%{
            margin-top: 80px;
            padding: 0 30px;
            opacity: 1;
        }
    }
    @keyframes ani-first-end {
        0%{
            margin-top: 80px;
            padding: 0 30px;
        }
        100%{
            margin-top: 0;
            padding:0;
        }
    }
    @keyframes carousel {
        0% {
            -webkit-transform: translateZ(-182px) rotateY(0);
            transform: translateZ(-182px) rotateY(0);
        }
        100% {
            -webkit-transform: translateZ(-182px) rotateY(-120deg);
            transform: translateZ(-182px) rotateY(-120deg);
        }
    }
    @keyframes carousel-left {
        0% {
            -webkit-transform: translateZ(-182px) rotateY(0);
            transform: translateZ(-182px) rotateY(0);
        }
        100% {
            -webkit-transform: translateZ(-182px) rotateY(120deg);
            transform: translateZ(-182px) rotateY(120deg);
        }
    }
}
</style>
