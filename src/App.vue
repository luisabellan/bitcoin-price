<template>
<img alt="Vue logo" src="./assets/logo.png">

<Prices />
</template>

<script>
import Prices from './components/Prices.vue'
export default {
    name: 'App',
    components: {

        Prices,
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
