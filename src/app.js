import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () =>{
  // console.log('DCL');
  new Vue({
    el: "#app",
    data: {
      ratesObject: {},
      selectedRate: null,
      selectedCurrency: null,
      baseNumber: 1
    },
    mounted(){
      this.getRates()
    },
    computed: {
      toEuros: function(){
        return (this.baseNumber * this.rateForSelectedCurrency).toFixed(2);
      },
      fromEuros: function(){
        return (this.baseNumber / this.rateForSelectedCurrency).toFixed(2);
      },
      rateForSelectedCurrency: function() {
        return this.ratesObject[this.selectedCurrency];
      }
    },
    methods: {
      getRates: function() {
        fetch("https://api.exchangeratesapi.io/latest")
        .then(res => res.json())
        .then(rates => this.ratesObject = rates.rates)
      }
    }
  })

});
