//import employee class
const Employee = require('./Employee')

//define engineer class with constructor function by extending employee class; create object with properties
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }

    //add methods (functions) to engineer class

    getGithub() {
        return this.github
    }

    getRole() {
        return 'Engineer'
    }
}


module.exports = Engineer