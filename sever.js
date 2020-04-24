// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",

//   // Your port; if not 3306
//   port: 3306,

//   // Your username
//   user: "root",

//   // Your password
//   password: "6963",
//   database: "employee_DB"
// });

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId + "\n");
//   inits();
// });

// function inits(){
//     inquirer
//     .prompt([
//         {
//         type: "list",
//         message: "What would you like to do?",
//         choices: ["Add", "Update","View"],
//         name: "question"
//         }

//     ]).then(response => {
//         switch (response.question){

//         case "Add": add()

//     }

//     });
// };
//     function add(){
//         inquirer
//         .prompt([
//             {
//             type: "list",
//             message: "What would you like to add?",
//             choices: ["departments", "roles","employees"],
//             name: "add"
//             }
    
//         ]).then(response => {
//             switch(response.add){

//                case "departments" : addDepartment()

//                break;
//                case "roles": addRoles()
//                break;

//                case "employees" : addEmployees()
//                break;

//                default: console.log("err in the add function")


//             }

        
//     });
// };