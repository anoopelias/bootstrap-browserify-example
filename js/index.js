
var $ = jQuery = require('jQuery')
require('bootstrap');
var other = require('./other')

console.log(typeof $().modal);
console.log(other());

module.exports = function() {
  console.log('Executed function xyz');
}
