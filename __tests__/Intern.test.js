const Intern = require('../lib/Intern')

test('Can set school via constructor', () => {
  const testValue = 'UCD'
  const e = new Intern('Bert', 1, 'start@org.com', testValue)
  expect(e.school).toBe(testValue)
})

test('getRole() should return \"Intern\"', () => {
  const testValue = 'Intern'
  const e = new Intern('Bert', 1, 'start@org.com', 'UCD')
  expect(e.getRole()).toBe(testValue)
})

test('Can get school via getSchool()', () => {
  const testValue = 'UCD'
  const e = new Intern('Bert', 1, 'start@org.com', testValue)
  expect(e.getSchool()).toBe(testValue)
})
