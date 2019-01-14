const PubSub = require('../helpers/pub_sub.js')

const ResultView = function () {

}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeNumber:result-calculated', (event) => {
    const isPrime = event.detail
    this.displayResult(isPrime)
  })
};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result')
  resultElement.textContent = result
};

// ResultView.prototype.niceResultMate = function (result) {
//   let niceResultMate = 'Not a prime number bro!'
//   if (result === true) {
//     niceResultMate = 'Yes, its a Prime Number, obvs!'
//   }
//     return niceResultMate
// };

module.exports = ResultView;
