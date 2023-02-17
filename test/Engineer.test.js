const Engineer = require("../lib/Engineer");

test("Can create a github", () => {
    const testGithub = "TheIPM";
    const employeeNew = new Engineer("Islam", 2, "islam@email.com", testGithub);
    expect(employeeNew.github).toBe(testGithub);
  });

  test("Testing getGithub will return github", () => {
    const testGithub = "TheIPM";
    const employeeNew = new Engineer("Islam", 2, "islam@email.com", testGithub);
    expect(employeeNew.github).toBe(testGithub);
});

test("Testing role", () => {
    const returnValue = "Engineer";
    const employeeNew = new Engineer("Islam", "islam@email.com", "TheIPM");
    expect(employeeNew.getRole()).toBe(returnValue);
});