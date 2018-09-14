const EmployeeController = require("./controllers/EmployeesController");
const GridController = require("./controllers/GridController");
const WorkPlaceController = require("./controllers/WorkPlaceController");

module.exports = app => {
  app.get("/employees", EmployeeController.employees);
  app.post("/createGrid", GridController.createGrid);
  app.get("/grid", GridController.grid);
  app.put("/updateGrid/:floor", GridController.updateGrid);
  app.post("/createWorkPlace", WorkPlaceController.createWorkPlace);
  app.get("/getWorkPlace", WorkPlaceController.getWorkPlace);
  app.delete("/deleteWorkPlace", WorkPlaceController.deleteWorkPlace);
};
