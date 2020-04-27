    var mysql = require("mysql");
    var inquirer = require("inquirer");

    var connection = mysql.createConnection({
        host: "localhost",

        // port; if not 3306
        port: 3306,

        // Your username
        user: "root",

        // Your password
        password: "6963",
        database: "employee_DB"
    });

    connection.connect(function (err) {
        if (err) throw err;
        console.log("connected as id " + connection.threadId + "\n");
        start();
    });

// function which prompts the user for what action they should take
    function start() {
        inquirer
            .prompt([
                {
                    type: "list",
                    message: "What would you like to do?",
                    choices: ["Add", "View", "Update", "Delete"],
                    name: "options"
                }

            ]).then(response => {
                switch (response.options) {

                    case "Add": addInfo();
                    break;

                    case "View": viewInfo();
                    break;

                    case "Update": updateInfo();
                    break;

                    case "Delete": deleteInfo();
                    break;

                }
            });
    };
//*******************************************ADD*************************************** */
    function addInfo() {
        inquirer
            .prompt([
                {
                    type: "list",
                    message: "What would you like to add?",
                    choices: ["departments", "roles", "employees"],
                    name: "add"
                }

            ]).then(response => {
                switch (response.add) {

                    case "departments": addDepartment();

                        break;

                    case "roles": addRoles();

                        break;

                    case "employees": addEmployees();

                        break;

                    default: console.log("err in the add function")
                };
            });
    };
    function addDepartment() {
        inquirer
            .prompt([
            {
                
                type: "input",
                message: "What is the department of the employee would you like to add?",
                name: "item",
            }

            ]).then(function(addDepartment) {
            connection.query(
                "INSERT INTO department SET ?",
                {
                  name: addDepartment.item,
                },
                function(err) {
                    if (err) throw err;
                    console.log("Employee's department was created successfully!");
            });      
        });
    };
    function addRoles() {
        inquirer
            .prompt([
            { 
                type: "input",
                message: "What is the role of the employee?",
                name: "role",
            },
            {
                type: "input",
                message: "How much is the salary of the employee?",
                name: "salary",
            },
            {
                type: "input",
                message: "what is department id of the employee?",
                name: "deptId",
            }

            ])
            .then(function(addRoles) {
            connection.query(
                "INSERT INTO role SET ?",
                {
                  title: addRoles.role,
                  salary: addRoles.salary,
                  department_id: addRoles.deptId
                },
                function(err) {
                    if (err) throw err;
                    console.log("Your role was created successfully!");
            });      
        });
    };
    function addEmployees(){
        inquirer
            .prompt([
            { 
                type: "input",
                message: "What is the employee's first name?",
                name: "firstName",
            },
            { 
                type: "input",
                message: "What is the employee's last name?",
                name: "lastName",
            },
            {
                type: "input",
                message: "what is the employee's role id?",
                name: "roleId",
            },
            {
                type: "input",
                message: "what is the manager id of the employee?",
                name: "managerId",
            }
    
            ]).then(function(addEmployees) {
            connection.query(
                "INSERT INTO employee SET ?",
                {
                  first_name: addEmployees.firstName,
                  last_name: addEmployees.lastName,
                  role_id: addEmployees.roleId,
                  manager_id: addEmployees.managerId
                },
                function(err) {
                    if (err) throw err;
                    console.log("Your role was created successfully!");
            });      
        });
    };
// ******************************************VIEW***************************************
    function viewInfo() {
        inquirer
            .prompt([
                {
                    type: "list",
                    message: "What would you like to view?",
                    choices: ["View All Employees","View All Employee By Manager","View All Employee By Department"],
                    name: "view"
                }

            ]).then(response => {
                switch (response.view) {
                    case "View All Employees": viewAllEmployees();

                        break;

                    case "View All Employee By Manager": viewByManager();

                        break;

                    case "View All Employee By Department": viewByDept();

                        break;

                    default: console.log("err in the view function")
                };
            });
    };
    function viewAllEmployees(){
        connection.query(" SELECT department.id, department.name, role.title, role.salary, employee.first_name, employee.last_name FROM department INNER JOIN role ON department.id = role.department_id INNER JOIN employee ON role.department_id = employee.role_id", function(err, results) {
            if (err) throw err;
        console.table(results);
        }); 
        connection.end();
    };
    // function viewAllEmployees(){
    //     connection.query("SELECT * FROM department SELECT role.title, role.salary FROM role SELECT employee.first_name, employee.first_name", function(err, results) {
    //         if (err) throw err;
    //     console.table(results);
    //     connection.end();
    //     });
    // };
    // function viewByManager(){
    //     connection.query("SELECT * FROM role", function(err, results) {
    //         if (err) throw err;
    //         console.table(results);
    //         connection.end();
    //     });
    // // };
    // function viewByDept(){
    //     connection.query("SELECT department.id, department.name, employee.first_name, employee.last_name FROM department INNER JOIN role ON department.id = role.department_id"
    //     FROM books
    //     LEFT JOIN authors ON books.authorId = authors.id;", function(err, results) {
    //         if (err) throw err;
    //         console.table(results);
    //         connection.end();
    //     });
    // };

    

    
// //****************************************UPDATE*********************************** 
    function updateInfo() {
        inquirer
            .prompt([
                {
                    type: "list",
                    message: "What would you like to update?",
                    choices: ["employeeRoles", "employeeManagers"],
                    name: "update"
                }

            ]).then(response => {
                switch (response.update) {

                    case "employeeRoles": updateRoles();

                        break;

                    case "employeeManagers": updateManagers();

                        break;

                    default: console.log("err in the update function")
                };
            });
    };

    function updateRoles(){
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What employee role would you like to update?",
                    name: "oldRole"
                },
                {
                    type: "input",
                    message: "What role would you like to change it to?",
                    name: "newRole"
                }

            ])
            .then(response => {
                connection.query("UPDATE role SET ? WHERE ?",
                [
                    {
                     title: response.newRole
                    },
                    {
                    title: response.oldRole  
                    }
                ],
                function(err, res) {
                    if (err) throw err;
                    console.log(res.affectedRows + " New role updated!");
                }
                );
            });
    };

    // function updateManagers(){
    //     inquirer
    //         .prompt([
    //             {
    //                 type: "input",
    //                 message: "What is the id of employee would you like to update a manager?",
    //                 name: "oldManager"
    //             },
    //             {
    //                 type: "input",
    //                 message: "what is the name of employee's manager whould you like to add?",
    //                 name: "newManager"
    //             },
            
    //         ])
    //         .then(response => {
    //             connection.query("UPDATE employee SET ? WHERE ?",
    //             [
    //                 {
    //                 manager_id: response.newManager
    //                 },
    //                 {
    //                 manager_id: response.oldManager  
    //                 }
    //             ]),
    //             function(err, res) {
    //                 if (err) throw err;
    //                 console.log(res.affectedRows + " New manager updated!");
    //             }
    //         });
    // };
//*****************************************DELETE***************************************** 
    function deleteInfo() {
        inquirer
            .prompt([
                {
                    type: "list",
                    message: "What would you like to delete?",
                    choices: ["departments", "roles", "employees"],
                    name: "delete"
                }

            ]).then(response => {
                switch (response.delete) {

                    case "roles": deleteRole();

                        break;

                    case "departments": deleteDept();

                        break;
                    
                    case "employees": deleteEmployee();
                        break;

                    default: console.log("err in the delete function")
                };
            });
    };
    function deleteRole(){
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the id of the employee you would like to delete?",
                    name: "employeeId"
                }                      
            ])
            .then(response => {
                connection.query(
                    "DELETE FROM role WHERE ?",
                    {
                      id: response.employeeId                  
                    },
                    function(err, res) {
                        if (err) throw err;
                        console.log(res.affectedRows + " Employee deleted!\n");
                    });
            });
    };

    function deleteDept(){
        inquirer
            .prompt([
                {
                    type: "input",
                    message:"What is the id of the department you would like to delete?",
                    name: "deleteDept"
                },
            ])
            .then(response => {
                connection.query(
                    "DELETE FROM department WHERE ?",
                    {
                      id: response.deleteDept
                    },
                    function(err, res) {    
                        if (err) throw err;
                        console.log(res.affectedRows + " Department deleted!\n");
                    });
            });
    };

    function deleteEmployee(){
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the id of the employee you would like to delete?",
                    name: "deleteEmployee"
                },
            ])
            .then(response => {
                connection.query(
                    "DELETE FROM employee WHERE ?",
                    {
                      id: response.deleteEmployee
                    },
                    function(err, res) {
                        if (err) throw err;
                        console.log(res.affectedRows + " Employee deleted!\n");
                    });
            });
     };


