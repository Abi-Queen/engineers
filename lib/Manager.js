//import employee class
const Employee = require('./Employee')

//define manager class with constructor function by extending employee class; create object with properties
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    //add methods (functions) to engineer class

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return 'Manager'
    }
}
 

module.exports = Manager