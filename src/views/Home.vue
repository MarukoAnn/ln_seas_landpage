<template>
    <pc v-if="!isPhone"></pc>
    <mobile v-else></mobile>
</template>

<script>
// @ is an alias to /src

import {defineComponent, getCurrentInstance, onBeforeMount, ref} from 'vue'
import pc from '@/components/Pc'
import mobile from "@/components/mobile";
export default defineComponent({
    name: 'Home',
    components: {
        pc,
        mobile
    },
    setup(){
        const {proxy} = getCurrentInstance();
        
        const isPhone = ref(false);

        onBeforeMount(() => {
            isPhone.value = proxy.$util.isPhone();
            console.log(isPhone.value);
        })

        return {
            isPhone
        }
    }

})
</script>
<style lang="scss">
//@import "@/assets/style/pc/pc.scss";
</style>
