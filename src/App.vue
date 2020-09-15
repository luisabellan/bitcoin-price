<template>
<div id="app">
    <h1>Bitcoin Price Index</h1>
    <div v-for=" c in c" v-bind:key="c.id" class="currency">
        {{ c.description }}:
        <span class="lighten">
            <span v-html="c.symbol"></span>{{ c.rate_float.toFixed(2) }}
        </span>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'App',

    mounted() {
        axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => {
                this.c = response.data.bpi
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
