<template>
<div id="app">
    <h1>Bitcoin Price Index</h1>
    <div v-for=" curr in currencies" v-bind:key="curr.id" class="currencies">
        {{ curr.description }}:
        <span class="lighten">
            <span v-html="curr.symbol"></span>{{ curr.rate_float.toFixed(2) }}
        </span>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'App',
    curr: [],

    computed() {

        axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res => {
                this.currencies = res.data.bpi
                console.log(this.curr);
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
