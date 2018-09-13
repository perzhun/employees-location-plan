const EmployeeController = require("./controllers/EmployeesController");
const GridController = require("./controllers/GridController");

module.exports = app => {
  app.get("/employees", EmployeeController.employees);
  app.post("/createGrid", GridController.createGrid);
  app.get("/grid", GridController.grid);
  app.put("/updateGrid/:floor", GridController.updateGrid);
};
