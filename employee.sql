DROP DATABASE IF EXISTS employees;
CREATE database employees;

USE employees;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) DEFAULT '' NOT NULL,
  PRIMARY KEY (id)

);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id)
);

-- * **department**:
INSERT INTO department (name) VALUE ("Sales");
INSERT INTO department (name) VALUE ("Support");
INSERT INTO department (name) VALUE ("Engineer");

-- * **role**:
INSERT INTO role (title, salary, department_id) 
VALUE ("Sales Lead", 70000, 1);
INSERT INTO role (title, salary, department_id) 
VALUE ("Sales Rep", 55000, 1);
INSERT INTO role (title, salary, department_id) 
VALUE ("Support Lead", 40000, 2);
INSERT INTO role (title, salary, department_id) 
VALUE ("Email Support", 60000, 2);
INSERT INTO role (title, salary, department_id) 
VALUE ("Tech Support", 90000, 2);
INSERT INTO role (title, salary, department_id) 
VALUE ("Senior Engineer", 120000, 3);
INSERT INTO role (title, salary, department_id) 
VALUE ("Engineer", 80000, 3);

--   * **id** - INT PRIMARY KEY
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Austin", "Asher", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Sly", "Jones", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Chris", "Payton", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Michelle", "Roy", 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Kyle", "Miles", 4, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Jordan", "Smith", 5, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Ashley", "Santos", 6, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Bertha", "Hernandez", 7, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Raul", "Ramirez", 7, 3);