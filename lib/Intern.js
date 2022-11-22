//import employee class
const Employee = require('./Employee')

//define intern class with constructor function by extending employee class; create object with properties
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }

    //add methods (functions) to engineer class

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern'
    }
}


module.exports = Intern