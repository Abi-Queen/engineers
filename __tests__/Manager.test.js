const checkAlwaysEqual = require('../lib/Manager.js')

test('checks if 10 is equal to 10', () => {
    expect(checkAlwaysEqual(10, 10)).toBe(true)
})