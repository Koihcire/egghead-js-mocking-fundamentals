const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

const originalGetWinner = utils.getWinner // keep a copy of the reference to the original getwinner
//TODO this is actually reassigning the actual utils.getWinner function for the thumb-war call in the next line??
utils.getWinner = (p1, p2) => p1 // reassign util.getwinner to always return p1 for mocking the test so it always returns pass

const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
assert.strictEqual(winner, 'Kent C. Dodds')

// cleanup
utils.getWinner = originalGetWinner // restore the original getwinner module for other tests
