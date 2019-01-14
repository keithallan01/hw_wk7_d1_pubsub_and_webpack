const PubSub = require('../helpers/pub_sub.js')
const PrimeChecker = function(){

};

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const inputtedNumber = event.detail;
    const primeNumber = this.numberIsPrime(inputtedNumber)
    PubSub.publish('PrimeNumber:result-calculated', primeNumber);
  })
};

PrimeChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return 'no its not a prime number';
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return 'no its not a prime number';
    }
  }
  return 'Yes, its a prime number';
};

module.exports = PrimeChecker;
