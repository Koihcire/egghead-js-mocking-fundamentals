const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  const originalGetWinner = utils.getWinner
  utils.getWinner = jest.fn((p1, p2) => p1)

  const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
  expect(winner).toBe('Kent C. Dodds')

  // console.log(utils.getWinner) can see mock.calls. this can replace the bottom 2 assertions
  // we would expect getWinner to be called twice because of the game logic in thumbwar, min 2 to win
  expect(utils.getWinner.mock.calls).toEqual([
    ['Kent C. Dodds', 'Ken Wheeler'],
    ['Kent C. Dodds', 'Ken Wheeler']
  ])
  // could also do these assertions:
  expect(utils.getWinner).toHaveBeenCalledTimes(2)
  expect(utils.getWinner).toHaveBeenNthCalledWith(
    1,
    'Kent C. Dodds',
    'Ken Wheeler'
  )
  expect(utils.getWinner).toHaveBeenNthCalledWith(
    2,
    'Kent C. Dodds',
    'Ken Wheeler'
  )

  // cleanup
  utils.getWinner = originalGetWinner
})
