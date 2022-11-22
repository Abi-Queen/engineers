//define employee class with constructor function to create employee object with properties
class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }

    //add methods (functions) to employee class

    getName() {
        return this.name

    }

    getId() {
        return this.id

    }

    getEmail() {
        return this.email

    }

    getRole() {
        return 'Employee'

    }

}


module.exports = Employee