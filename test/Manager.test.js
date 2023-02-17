const Manager = require("../lib/Manager");

test("Can create an office number", () => {
    const testOfficeNumber = 1;
    const employeeNew = new Manager("Tom", 1, "Tom@email.com", testOfficeNumber);
    expect(employeeNew.officeNumber).toBe(testOfficeNumber);
});

test("Testing will return office number", () => {
    const testOfficeNumber = 1;
    const employeeNew = new Manager("Tom", 1, "Tom@email.com", testOfficeNumber);
    expect(employeeNew.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role", () => {
    const returnValue = "Manager";
    const employeeNew = new Manager("Tom", 1, "Tom@email.com", 1);
    expect(employeeNew.getRole()).toBe(returnValue);
});