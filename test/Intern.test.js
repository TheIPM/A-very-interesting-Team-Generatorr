const Intern = require("../lib/Intern");

test("Can create school.", () => {
  const testSchool = "School Name";
  const employeeNew = new Intern("PhillipTam", "1234", "philliptam@example.com", testSchool);
  expect(employeeNew.getSchool()).toBe(testSchool);
});

test("Testing school will return school name.", () => {
  const testSchool = "School Name";
  const employeeNew = new Intern("PhillipTam", "1234", "PhillipTam@example.com", testSchool);
  expect(employeeNew.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
  const returnValue = "Intern";
  const employeeNew = new Intern("PhillipTam", "1234", "PhillipTam@example.com", "School Name");
  expect(employeeNew.getRole()).toBe(returnValue);
});