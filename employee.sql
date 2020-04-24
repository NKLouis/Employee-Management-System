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

