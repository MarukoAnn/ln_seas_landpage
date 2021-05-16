<template>
    <div>
        <transition name="fade">
            <div @touchend='end' @touchstart='start' @touchmove='move' class="swiper">
                <div @click="chooseItem(item,index)" v-for="(item, index) in imgLists" :style="ConfigList[index]"
                     :key="item.cover">
                    <img :src="item.cover" style="width: 100%; height: 100%;">
                </div>
            </div>
        </transition>
        <h1 @click="prev">上一个</h1>
        <h1 @click="next">下一个</h1>
<!--        <h1>当前：{{ centerInfo.id }}</h1>-->
    </div>
</template>

<script>
import {ref, defineComponent, onBeforeMount} from 'vue'

export default defineComponent({
    name: "swiper",
    setup() {
        const endX = ref('');
        const endY = ref('');
        const startY = ref('');
        const startX = ref('');
        const centerInfo = ref('');  // 当前中间信息
        const currentIndex = ref(3); //当前中间imgs数组中index
        const loading = ref(true);
        const previous = ref(0);
        const imgList = ref([
            {url: require('@/assets/images/swiper/pic1.jpg'), class: ''},
            {url: require('@/assets/images/swiper/pic2.jpg'), class: ''},
            {url: require('@/assets/images/swiper/pic3.jpg'), class: ''},
            {url: require('@/assets/images/swiper/pic4.jpg'), class: ''},
            {url: require('@/assets/images/swiper/pic5.jpg'), class: ''},

        ]);
        const imgLists = ref([
            {
                id: '莱因哈特1',
                index: 0,
                cover: require('@/assets/images/swiper/pic1.jpg')
            },
            {
                id: '安娜2',
                index: 1,
                cover:
                    require('@/assets/images/swiper/pic2.jpg')
            },
            {
                id: '卢西奥3',
                index: 2,
                cover:
                    require('@/assets/images/swiper/pic3.jpg')
            },
            {
                id: 'DVA4',
                index: 3,
                cover:
                    require('@/assets/images/swiper/pic4.jpg')
            },
            {
                id: '莫伊拉5',
                index: 4,
                cover:
                    require('@/assets/images/swiper/pic5.jpg')
            },
            {
                id: '莱因哈特1',
                index: 5,
                cover: require('@/assets/images/swiper/pic1.jpg')
            },
            {
                id: '安娜2',
                index: 6,
                cover:
                    require('@/assets/images/swiper/pic2.jpg')
            },
         /*   {
                id: '裂空6',
                index: 5,
                cover:
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572888482891&di=5416c6abf187547cd329377dc1092fff&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F20%2F20161020175323_auiK8.thumb.700_0.jpeg'
            },
            {
                id: '麦克雷7',
                index: 6,
                cover:
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572888500984&di=f415feaef2c02b497e9d3801743b8e49&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201711%2F26%2F20171126191812_4x8RV.thumb.700_0.jpeg'
            },
            {
                id: '士兵76  8',
                index: 7,
                cover:
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573056788040&di=dbf1954ad8ba1bee16afd9f47d763512&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201704%2F24%2F20170424202013_hveir.jpeg'
            },
            {
                id: '狂鼠9',
                index: 8,
                cover:
                    'http://ztd00.photos.bdimg.com/ztd/w=700;q=50/sign=ea29fa95c13d70cf4cfaa80dc8e7a03d/42166d224f4a20a4d334946b98529822720ed070.jpg'
            },
            {
                id: '死神 10',
                index: 9,
                cover:
                    'http://www.agri35.com/UploadFiles/img_2_4163694432_214245738_26.jpg'
            },
            {
                id: '禅雅塔 11',
                index: 10,
                cover:
                    'http://pic2.zhimg.com/v2-1c9b73f260ea2652dcdedfc782fde90d_b.jpg'
            },
            {
                id: '黑百合 12',
                index: 11,
                cover:
                    'http://b-ssl.duitang.com/uploads/item/201710/14/20171014134122_KmPQy.jpeg'
            }*/
        ])
        const ConfigList = ref([
            {
                id: '-A',
                position: 'absolute',
                width: '22%',
                height: '72%',
                top: '19.2%',
                left: '-22%',
                opacity: 0,
                zIndex: 0,
                transition: '.4s'
            },
            {
                id: 'A',
                position: 'absolute',
                width: '22%',
                height: '72%',
                top: '19.2%',
                left: '0%',
                opacity: 0,
                zIndex: 1,
                transition: '.4s'
            },
            {
                id: 'B',
                position: 'absolute',
                width: '28%',
                height: '82%',
                top: '14%',
                left: '13%',
                opacity: 0.4,
                zIndex: 2,
                transition: '.4s',
                transform: 'rotateY(120deg) translateZ(182px)'
            },
            {
                id: 'center',
                position: 'absolute',
                width: '45%',
                height: '100%',
                top: '0px',
                left: '50%',
                marginLeft: '-22.5%',
                marginTop: '10%',
                opacity: 1,
                zIndex: 4,
                transition: '.4s'
            },
            {
                id: 'D',
                position: 'absolute',
                width: '28%',
                height: '82%',
                top: '14%',
                left: '61.8%',
                opacity: 0.4,
                zIndex: 2,
                transition: '.4s'
            },
            {
                id: 'E',
                position: 'absolute',
                width: '22%',
                height: '72%',
                top: '19.2%',
                left: '78%',
                opacity: 0,
                zIndex: 1,
                transition: '.4s'
            },
            {
                id: 'E+',
                position: 'absolute',
                width: '22%',
                height: '72%',
                top: '19.2%',
                left: '100%',
                opacity: 0,
                zIndex: 0,
                transition: '.4s'
            }
        ])


        // 获取数据
        const getData = async () => {
            setTimeout(() => {
                loading.value = false;
            });
        }
        // 滑动上一个
        const prev = (index) => {
            // imgLists.value.unshift(imgLists.value.pop());
            ConfigList.value.push(ConfigList.value.shift());
            currentIndex.value = currentIndex.value - 1;
            if (currentIndex.value < 0) {
                currentIndex.value = imgLists.value.length - 1;
            }
            centerCard();
            centerIndex('prev');
        }
        // 滑动下一个
        const next = () => {
            // imgLists.value.push(imgLists.value.shift());
            ConfigList.value.unshift(ConfigList.value.pop());
            currentIndex.value = currentIndex.value + 1;
            if (currentIndex.value > imgLists.value.length - 1) {
                currentIndex.value = 0;
            }
            centerCard();
            centerIndex('next');
            // console.log(currentIndex.value);
        }
        // 开始移动端滑动屏幕
        const start = (event) => {
            startX.value = event.changedTouches[0].clientX;
            startY.value = event.changedTouches[0].clientY;
        }
        // 连续滑动
        const move = (event) => {
            endY.value = event.changedTouches[0].clientY;
            endX.value = event.changedTouches[0].clientX;
            this.stopDefault(event);
// 如果是滑动，注解（223行到231行）这段。如果是连续滑动，放开（223行到231行）注解
            this.interval = endX.value - startX.value;
            if (this.interval > 40) {
                startX.value = endX.value;
                this.prev();
            }
            if (this.interval < -40) {
                startX.value = endX.value;
                this.next();
            }
        }
        // 滑动
        const end = (event) => {
// 如果是滑动，放开（236行到238行）的注解。如果是连续滑动，注解（236行到238行）
            endY.value = event.changedTouches[0].clientY;
            endX.value = event.changedTouches[0].clientX;
            formatSwiper();
        }
        const formatSwiper = () => {
            if (startX.value > endX.value) {
                console.log('左边滑动');
                if (startX.value > endX.value + 40) {
                    this.next();
                }
            } else {
                console.log('右边滑动');
                if (endX.value > startX.value + 40) {
                    this.prev();
                }
            }
        }
        // 阻止touchmove的横向默认事件（ios快捷操作会关闭页面）
        const stopDefault = (event) => {
            let differenceY = endY.value - startY.value;
            let differenceX = endX.value - startX.value;
            if (Math.abs(differenceX) > Math.abs(differenceY)) {
                event.preventDefault();
            }
        }
        // 当前imgs在位置上的index（并非img数组的index）
        const centerIndex = (val) => {
            if (val == 'prev') {
                for (let val of imgLists.value) {
                    if (val.index == imgLists.value.length - 1) {
                        val.index = 0;
                    } else {
                        val.index = val.index + 1;
                    }
                }
            } else {
                for (let val of imgLists.value) {
                    if (val.index == 0) {
                        val.index = imgLists.value.length - 1;
                    } else {
                        val.index = val.index - 1;
                    }
                }
            }
        }
        // 点击
        const chooseItem = (item, index) => {
            let cycles = item.index;
            if (item.index < 3) {
                for (let i = 0; i < 3 - cycles; i++) {
                    console.log(item.index);
                    this.prev();
                }
            } else if (item.index > 3) {
                for (let i = -1; i < item.index - 3; i++) {
                    this.next();
                }
            } else if (item.index == 3) {
                console.log('投票');
            }
        }
        // 计算中间卡片信息
        const centerCard = () => {
            centerInfo.value = imgLists.value[currentIndex.value];
            // this.$emit('centerInfo', this.centerInfo);
            // this.$emit('centerInfo', this.centerInfo);
            // console.log(imgLists.value[2].id);
        }
        const addCardStyle = () => {
            if (imgLists.value.length > 7) {
                let addtime = imgLists.value.length - 7;
                for (let i = 0; i < addtime; i++) {
                    console.log('add');
                    ConfigList.value.push({
                        id: 'center',
                        position: 'absolute',
                        width: '45%',
                        height: '100%',
                        top: '0px',
                        left: '50%',
                        marginLeft: '-22.5%',
                        opacity: 0,
                        transition: '.1s'
                    });
                }
            }
        }

        onBeforeMount(() => {
            getData();
            centerCard(); // 获取中间卡片信息
            addCardStyle();// 加入样式位置的index
        })
        return {
            imgList,
            imgLists,
            ConfigList,
            chooseItem,
            move,
            prev,
            next,
            centerIndex,
            stopDefault
        }
    }
})
</script>

<style scoped lang="scss">
.swiper {
    width: 100%;
    height: 300px;
    position: relative;
    overflow: hidden;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    -webkit-transform: translateZ(-282px) rotateY(0);
    transform: translateZ(-282px) rotateY(0);
    div {
        opacity: 1;
    }
}

/*}
.el-carousel__item img{
    width: 200px;
}
.el-carousel__item {
    opacity: 0.5;
}
!*.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;

}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}*!
.el-carousel--horizontal {
    overflow: hidden;
}
.el-carousel__mask {
    height: 380px;
}
.is-active {
    opacity: 1;
    margin-top: 100px;

}*/
</style>
