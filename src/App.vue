<template>
<div id="app">
    <h1>Bitcoin Price Index</h1>
    <div v-bind:key="curr.id" v-for=" curr in currencies" class="currencies">
        {{ curr.description }}:
        <span class="lighten">
            <span v-html="curr.symbol"></span>{{ curr.rate_float.toFixed(2) }}
        </span>
    </div>
</div>
</template>

<script>
import axios from 'axios'

// todo repair axios and see about export default in main.js

export default {
    name: 'App',
    currencies: [],

    conputed() {

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
