<template>
    <section class="carousel">
        <figure class="icon-cards">
            <div :class="{'icon-cards__content': true}">
                <div  :class="['icon-cards__item',  item.class]"
                      v-for="(item,index) in imgList" :key="index">
                    <img :src="item.url" alt="" @mouseover="clearInter" @mouseleave="startInter" >
                    <div @mouseover="clearInter" @mouseleave="startInter"  v-if="item.class !== 'center'"
                         style="background: rgba(170,182,218,0.7);width: 100%;height: 450px;position: absolute;top: 0">
                    </div>
                </div>
            </div>
            <img src="@/assets/images/Mo/swiper/btn_prev.png" @mouseover="clearInter" @mouseleave="startInter"  alt="" @click="prev"
                 style="position: absolute; top: 30vh;left: -60px">
            <img src="@/assets/images/Mo/swiper/btn_next.png" alt="" @mouseover="clearInter" @mouseleave="startInter"   @click="next"
                 style="position: absolute; top: 30vh;right: -60px">
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
        -webkit-perspective: 1400px;
        perspective: 1400px;
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
            img {
                width: 100%;
                height: 450px;
            }
        }
        .left{
            -webkit-transform: translateX(350px) translateZ(-300px) rotateY(-45deg);
            transform: translateX(350px) translateZ(-300px) rotateY(-45deg);
            opacity: 1;
        }
        .center{
            //box-sizing: border-box;
            margin-top: 120px;
            //padding: 0 80px;
            -webkit-transform: translateX(0) translateZ(0) rotateY(0);
            transform: translateX(0) translateZ(0) rotateY(0);
            opacity: 1;
        }
        .right{
            -webkit-transform: translateX(-350px) translateZ(-300px) rotateY(45deg);
            transform: translateX(-350px) translateZ(-300px) rotateY(45deg);
            opacity: 1;
        }
        .other, .other1{
            -webkit-transform: translateX(-350px) translateZ(-400px) rotateY(45deg);
            transform: translateX(-350px) translateZ(-400px) rotateY(45deg);
            opacity: 0;
        }
        .active{
            box-sizing: border-box;
            margin-top: 120px;
            padding: 0 80px;

        }
    }
    .card-point {
        position: absolute;
        bottom: -500px;
        display: flex;
       .point{
           width: 26px;
           height: 26px;
           border-radius: 50%;
           background: #999999;
           margin: 0 25px;
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
