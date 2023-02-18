const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const generateHTML = require("./src/template");

const employees = [];

const managerQuestions = [
  {
    type: "input",
    message: "What is the manager's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the manager's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the manager's office number?",
    name: "officeNumber",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "What is the engineer's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the engineer's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the engineer's Github username?",
    name: "github",
  },
];

const internQuestions = [
  {
    type: "input",
    message: "What is the intern's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the intern's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the intern's school?",
    name: "school",
  },
];

const addManager = async () => {
  const { name, email, officeNumber } = await inquirer.prompt(
    managerQuestions
  );
  employees.push(new Manager(name, employees.length, email, officeNumber));
  console.log("Manager added.");
  addEmployee();
};

const addEngineer = async () => {
  const { name, email, github } = await inquirer.prompt(engineerQuestions);
  employees.push(new Engineer(name, employees.length, email, github));
  console.log("Engineer added.");
  addEmployee();
};

const addIntern = async () => {
  const { name, email, school } = await inquirer.prompt(internQuestions);
  employees.push(new Intern(name, employees.length, email, school));
  console.log("Intern added.");
  addEmployee();
};

const addEmployee = async () => {
  const { employeeType } = await inquirer.prompt([
    {
      type: "list",
      message: "Which type of employee would you like to add?",
      name: "employeeType",
      choices: ["Manager", "Engineer", "Intern", "Team Building Finished"],
    },
  ]);

  switch (employeeType) {
    case "Manager":
      return addManager();
    case "Engineer":
      return addEngineer();
    case "Intern":
      return addIntern();
    default:
        console.log("Well done! Team building finished!");
        generateHTML(employees)
          .then(res => console.log(res.message))
          .catch(err => console.log(err));
  }
};

addEmployee();