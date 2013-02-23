var assert = require('assert');

function isOdd(num) {
  return (num % 2) === 1;
}

assert.equal( isOdd(3), true);
assert.equal( isOdd(2), false);

//this should fail
assert.equal( isOdd(0), true);