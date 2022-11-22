const Engineer = require('../lib/Engineer.js')

test('creates an engineer object', () => {
    const engineer = new Engineer()

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toBeGreaterThan(0)
    expect(employee.email).toEqual(expect.any(String))
    expect(employee.github).toEqual(expect.any(String))
})