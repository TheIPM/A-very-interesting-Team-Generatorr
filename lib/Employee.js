class Employee {
    static counter = 0;

    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.id = ++Employee.counter;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        var role = "Employee";
        return role;
    }
}

module.exports = Employee;