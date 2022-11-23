const Employee = require('../lib/Employee.js')

test('Can instantiate Employee instance', () => {
  const e = new Employee()
  expect(typeof(e)).toBe('object')
})

test('Can set name via constructor arguments', () => {
  const name = 'Bert'
  const e = new Employee(name)
  expect(e.name).toBe(name)
})


test('Can set id via constructor argument', () => {
  const testValue = 100
  const e = new Employee('Barney', testValue)
  expect(e.id).toBe(testValue)
})

test('Can set email via constructor argument', () => {
  const testValue = 'test@this.com'
  const e = new Employee('Bob', 1, testValue)
  expect(e.email).toBe(testValue)
})

test('Can get name via getName()', () => {
  const testValue = 'Beetle'
  const e = new Employee(testValue)
  expect(e.getName()).toBe(testValue)
})

test('Can get id via getId()', () => {
  const testValue = 100
  const e = new Employee('Harold', testValue)
  expect(e.getId()).toBe(testValue)
})

test('Can get email via getEmail()', () => {
  const testValue = 'test@world.org'
  const e = new Employee('Bob', 1, testValue)
  expect(e.getEmail()).toBe(testValue)
})

test('getRole() should return \'Employee\'', () => {
  const testValue = 'Employee'
  const e = new Employee('Tamara', 1, 'test@group.com')
  expect(e.getRole()).toBe(testValue)
})
