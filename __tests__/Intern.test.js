const Intern = require('../lib/Intern')

test('creates an intern object', () => {
    const intern = new Intern()

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toBeGreaterThan(0)
    expect(employee.email).toEqual(expect.any(String))
    expect(employee.school).toEqual(expect.any(String))
})