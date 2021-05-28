<template>
    <div id="nav" class="nav">
        <div id="fb-root">
            <router-view/>
        </div>
    </div>
</template>
<script>
export default {
    name: 'app',
}
</script>
<style lang="scss">
#nav {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100vh;
    overflow-y: scroll;
}
</style>
