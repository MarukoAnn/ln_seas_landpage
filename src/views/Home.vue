<template>
    <pc v-if="!isPhone"></pc>
    <mobile v-else></mobile>
</template>

<script>
// @ is an alias to /src

import {defineComponent, getCurrentInstance, onBeforeMount, onMounted, ref} from 'vue'
import pc from '@/components/XPc'
import mobile from "@/components/XMobile";
export default defineComponent({
    name: 'Home',
    components: {
        pc,
        mobile
    },
    setup(){
        const {proxy} = getCurrentInstance();
        const isPhone = ref(false);
        document.title = '驯龙物语';
        onBeforeMount(() => {
            isPhone.value = proxy.$util.isPhone();
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
