--Drops the employee_DB --
DROP DATABASE IF EXISTS employee_DB;

--Creates the "employee_DB" database --
CREATE DATABASE employee_DB;


USE employee_DB;


--Creates the tables--

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NULL,
PRIMARY KEY (id)

);

CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30) NULL,
salary DECIMAL,
department_id INT,
PRIMARY KEY (id)

);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NULL,
last_name VARCHAR(30) NULL,
role_id INT,
manager_id INT,
PRIMARY KEY (id)

);

-- INSERT INTO department (name) values ('HR');
-- INSERT INTO department (name) values ('Financing');
-- INSERT INTO department (name) values ('Collections');
-- INSERT INTO department (name) values ('Manufacturing');

-- INSERT INTO role (title, salary, department_id) values ('manager', '10000','4');
-- INSERT INTO role (title, salary, department_id) values ('advisor', '8000','3');
-- INSERT INTO role (title, salary, department_id) values ('worker', '5000','2');
-- INSERT INTO role (title, salary, department_id) values ('housekeeper', '3000','1');

-- INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Jane', 'Austen','1','1');
-- INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Mark', 'Twain','2','1');
-- INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Lewis', 'Carroll','3','1');
-- INSERT INTO employee (first_name, last_name, role_id, manager_id) values ('Andre', 'Asselin','4','1');

