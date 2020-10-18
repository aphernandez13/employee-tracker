const mysql = require("mysql");
const inquirer = require("inquirer");
//calls in my sql
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "employees",
});
//creats real connection
connection.connect(function (err) {
  if (err) throw err;
  initPrompt();
});

function initPrompt() {
  inquirer
    .prompt({
      name: "prompt",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all employees",
        "View all roles",
        "View all departments",
        "Add an employee",
        "Add a department",
        "Add a role",
        "Update an employee role",
        "Quit",
      ],
    })
    .then(function (response) {
      switch (response.prompt) {
        case "View all employees":
          viewAllEmployees();
          break;
        case "View all roles":
          viewAllRoles();
          break;
        case "View all departments":
          viewAllDepartments();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Update an employee role":
          updateEmployee();
          break;
        case "Quit":
          process.exit();
      }
    });
}

const viewAllEmployees = function () {
  connection.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    console.log("----------------");
    console.table(res);
  });
  initPrompt();
};

const viewAllDepartments = function () {
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    console.log("----------------");
    console.table(res);
  });
  initPrompt();
};

const viewAllRoles = function () {
  connection.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    console.log("----------------");
    console.table(res);
  });
  initPrompt();
};

const addEmployee = function () {
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "What is the first name of employee?",
      },
      {
        name: "last_name",
        type: "input",
        message: "What is the last name of employee?",
      },
      {
        name: "role_id",
        type: "input",
        message: "What is the role of the employee?",
      },
      {
        name: "manager_id",
        type: "input",
        message: "Who is the manager of the employee?",
      },
    ])
    .then(function (response) {
      let sqlQuery = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ("${response.first_name}", "${response.last_name}", ${response.role_id}, ${response.manager_id})`;
      connection.query(sqlQuery, function (err, res) {
        if (err) throw err;
        viewAllEmployees();
      });
    });
};

const addDepartment = function () {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is the department name?",
      },
    ])
    .then(function (response) {
      let sqlQuery = `INSERT INTO department (name) VALUE ("${response.name}")`;
      connection.query(sqlQuery, function (err, res) {
        if (err) throw err;
        viewAllDepartments();
      });
    });
};

const addRole = function () {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "What is the new role?",
      },
      {
        name: "salary",
        type: "input",
        message: "What is the salary of new role?",
      },
      {
        name: "department_id",
        type: "input",
        message: "What is the department id of the new role?",
      },
    ])
    .then(function (response) {
      let sqlQuery = `INSERT INTO role (title, salary, department_id) VALUE ("${response.title}", ${response.salary}, "${response.department_id}")`;
      connection.query(sqlQuery, function (err, res) {
        if (err) throw err;
        viewAllRoles();
      });
    });
};

const updateEmployee = function () {
  connection.query("SELECT * FROM department", function (err, departments) {
    if (err) throw err;
    console.table(departments);
    inquirer
      .prompt([
        {
          name: "department",
          type: "list",
          message: "What department would you like to update?",
          choices: departments.map((department) => ({
            name: department.name,
            value: department.id,
          })),
        },
      ])
      .then(function (response) {
        console.log(response);
      });
  });
};