const checkNotEqual = require('../lib/Engineer.js')

test('checks if 10 is equal to 10', () => {
    expect(checkNotEqual(10, 10)).toBe(true)
})