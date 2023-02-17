const Employee = require("../lib/Employee");

test("Create an new employee.", () => {
    const employeeNew = new Employee();
    expect(typeof(employeeNew)).toBe("object");
})

test("Name test", () => {
    const name = "Islam";
    const employeeNew = new Employee(name);
    expect(employeeNew.name).toBe(name);
})

test("Testing ID", () => {
    const id = "" ;
    const employeeNew = new Employee("Islam", id);
    expect(employeeNew.id).toBe(id);
})

test("Testing email", () => {
    const email = "Islam@email.com";
    const employeeNew = new Employee("Islam", 1, email);
    expect(employeeNew.email).toBe(email);
})



test("Gets name through getName method", () => {
    const testName = "Islam";
    const employeeNew = new Employee(testName);
    expect(employeeNew.getName()).toBe(testName);
})

test("Test ID through getID method", () => {
    const testID = 1;
    const employeeNew = new Employee("Islam", testID);
    expect(employeeNew.getId()).toBe(testID);
})

test("Test email through getEmail method", () => {
    const testEmail = "Islame@email.com";
    const employeeNew = new Employee("Islam", 2, testEmail);
    expect(employeeNew.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeNew = new Employee("Islam", 2, "Islame@email.com");
    expect(employeeNew.getRole()).toBe(returnValue);
})