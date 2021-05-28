<template>
    <section class="carousel">
        <figure class="icon-cards">
            <div :class="{'icon-cards__content': true, 'swiper-ani': isAni, 'swiper-ani-left': isLeftAni}">
                <img :src="item.url" alt="" :class="{'icon-cards__item': true, 'first-end' : (isAni || isLeftAni) && index === 0, 'first-start': index === 0, 'first': true}" v-for="(item,index) in imgList" :key="index"
                :style="{opacity: 0.6}">
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
    name: "Carousel",
    setup(){
        const imgList = ref([
            {url: require('@/assets/images/Xun/swiper/pic1.jpg'), class: 'first'},
            {url: require('@/assets/images/Xun/swiper/pic2.jpg'), class: ''},
            {url: require('@/assets/images/Xun/swiper/pic3.jpg'), class: ''},
            {url: require('@/assets/images/Xun/swiper/pic4.jpg'), class: ''},
            {url: require('@/assets/images/Xun/swiper/pic5.jpg'), class: ''},

        ])
        const isAni = ref(false);
        const isLeftAni = ref(false);
        const flag = ref(0);
        const next = () => {
            isAni.value  = true;
            setTimeout(() => {
                let item = imgList.value[0];
                item.class = '';
                imgList.value.shift();
                imgList.value.push(item);
                imgList.value[0].class = 'first';
                isAni.value = false;
            }, 2000)

            if (flag.value < imgList.value.length - 1){
                flag.value += 1;
            }else {
                flag.value = 0
            }
        }
        const prev = () => {
            isLeftAni.value  = true;
            setTimeout(() => {
                let item = imgList.value[imgList.value.length - 3];
                item.class = '';
                imgList.value.splice(imgList.value.length - 3, 1);
                let deatail = imgList.value[2].url;
                imgList.value[2].url = imgList.value[3].url;
                imgList.value[3].url = deatail;
                // 调换顺序
                // imgList.value.reverse();
                imgList.value.unshift(item);
                imgList.value[0].class = 'first';
                isLeftAni.value = false;
            }, 2000)
            if (flag.value < imgList.value.length - 1){
                flag.value += 1;
            }else {
                flag.value = 0
            }
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
    /*    div{
        img {
            width: 700px;
        }
    }
    div:first-child {
        img{
            transform-style: preserve-3d;
            width: 450px;
            -webkit-transform:rotateY(40deg);;
            -moz-transform:rotate3d(1,1,0,40deg);
            //-webkit-transform:rotate3d(1,0,0,50deg);
            //-moz-transform:rotate3d(1,0,0,50deg);
            //-webkit-transform: rotate(6deg);
            opacity: 0.5;
        }
    }
    div:nth-child(2){
        position: absolute;
        top: 120px;
        z-index: 1;
        opacity: 1;
    }
    div:last-child{
        margin-left: 40px;
        img{
            width: 450px;
            -webkit-transform:rotate3d(-1,1,0,40deg);
            -moz-transform:rotate3d(-1,1, 0,40deg);
            //-webkit-transform: rotate(-6deg);
            opacity: 0.5;
        }
    }*/
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
    }
    .icon-cards__item:nth-child(1) {
        -webkit-transform: rotateY(0) translateZ(382px);
        transform: rotateY(0) translateZ(382px);
    }
    .icon-cards__item:nth-child(2) {
        -webkit-transform: rotateY(120deg) translateZ(382px);
        transform: rotateY(120deg) translateZ(382px);
    }
    .icon-cards__item:nth-child(3) {
        -webkit-transform: rotateY(240deg) translateZ(382px);
        transform: rotateY(240deg) translateZ(382px);
    }
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
