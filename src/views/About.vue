<template>
    <Mpc v-if="!isPhone"></Mpc>
    <MoMobile v-else></MoMobile>
</template>
<script>

import {ref, getCurrentInstance, onBeforeMount} from 'vue'
import Mpc from '@/components/MPc';
import MoMobile from "@/components/MoMobile";
export default  {
    name: 'about',
    components: {
        MoMobile,
        Mpc
    },
    setup() {
        const isPhone = ref('');
        const {proxy} = getCurrentInstance();
        onBeforeMount(() =>{
            isPhone.value = proxy.$util.isPhone();
        })
        document.title = '馴龍勇者團';
        return {
            isPhone
        }
    }
}

</script>
