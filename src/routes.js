const EmployeeController = require("./controllers/EmployeesController");

module.exports = app => {
  app.get("/employees", EmployeeController.employees);
};
