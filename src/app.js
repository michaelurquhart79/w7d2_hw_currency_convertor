import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () =>{
  // console.log('DCL');
  new Vue({
    el: "#app",
    data: {
      ratesObject: {},
      selectedRate: null,
      baseNumber: 1
    },
    mounted(){
      this.getRates()
    },
    computed: {
      toEuros: function(){
        return (this.baseNumber * this.selectedRate).toFixed(2);
      },
      fromEuros: function(){
        return (this.baseNumber / this.selectedRate).toFixed(2);
      },
      getRate: function() {
        return this.ratesObject["AUD"];
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
