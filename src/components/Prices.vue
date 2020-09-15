<template>
<div id="app">
    <h1>Bitcoin Price Index</h1>

    <section v-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>

    <section v-else>
        <div v-if="loading">Loading...</div>

        <div v-else v-bind:key='currency' v-for="currency in info" class="currency">
            {{ currency.description }}:
            <span class="lighten">
                <span v-html="currency.symbol"></span>{{ currency.rate_floatl }}
            </span>
        </div>

    </section>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Prices',
    props: {
        msg: String
    },
    data() {
        return {
            info: null
        }
    },

    mounted() {
        axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => {
                this.info = response.data.bpi
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

</style>}
