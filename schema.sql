--Drops the employee_DB --
DROP DATABASE IF EXISTS employee_DB;

--Creates the "employee_DB" database --
CREATE DATABASE employee_DB;


USE employee_DB;


--Creates the tables--

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
deptName VARCHAR(30) NULL,
PRIMARY KEY (id)

);

CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30) NULL,
salary DECIMAL,
department_id INT,
FOREIGN KEY(department_id) REFERENCES department(id),
PRIMARY KEY (id) 

);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NULL,
last_name VARCHAR(30) NULL,
manager_id INT,
role_id INT,
FOREIGN KEY (role_id) REFERENCES role(id),
PRIMARY KEY (id)

);

INSERT INTO department (deptName) values ('HR');
INSERT INTO department (deptName) values ('IT');
INSERT INTO department (deptName) values ('Collections');
INSERT INTO department (deptName) values ('Manufacturing');

INSERT INTO role (title, salary, department_id) values ('manager', '10000','1');
INSERT INTO role (title, salary, department_id) values ('advisor', '8000','2');
INSERT INTO role (title, salary, department_id) values ('worker', '5000','3');
INSERT INTO role (title, salary, department_id) values ('housekeeper', '3000','4');

INSERT INTO employee (first_name, last_name, manager_id, role_id ) values ('Mark', 'Twain','1','1');
INSERT INTO employee (first_name, last_name, manager_id, role_id ) values ('Lewis', 'Carroll','2','2');
INSERT INTO employee (first_name, last_name, manager_id, role_id ) values ('Andre', 'Asselin','3','3');
INSERT INTO employee (first_name, last_name, manager_id, role_id ) values ('Sara', 'Rose','3','4');

