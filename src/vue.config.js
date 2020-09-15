// vue.config.js
module.exports = {
    // options...
    devServer: {
          proxy: 'https://api.coindesk.com/v1/bpi/currentprice.json',
      }
  }