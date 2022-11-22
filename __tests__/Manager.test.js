const Manager = require('../lib/Manager')

test('creates a manager object', () => {
    const manager = new Manager()

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toBeGreaterThan(0)
    expect(employee.email).toEqual(expect.any(String))
    expect(employee.officeNumber).toEqual(expect.any(String))
})