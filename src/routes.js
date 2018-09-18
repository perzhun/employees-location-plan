const EmployeeController = require("./controllers/EmployeesController");
const GridController = require("./controllers/GridController");
const WorkPlaceController = require("./controllers/WorkPlaceController");
const ChosenEmployeesController = require("./controllers/ChosenEmployeesController");

module.exports = app => {
  app.get("/employees", EmployeeController.employees);
  app.post("/createGrid", GridController.createGrid);
  app.get("/grid", GridController.grid);
  app.put("/updateGrid/:floor", GridController.updateGrid);
  app.post("/createWorkPlace", WorkPlaceController.createWorkPlace);
  app.get("/getWorkPlace", WorkPlaceController.getWorkPlace);
  app.delete("/deleteWorkPlace", WorkPlaceController.deleteWorkPlace);
  app.post(
    "/createChosenEmployee",
    ChosenEmployeesController.createChosenEmployee
  );
  app.get("/getChosenEmployee", ChosenEmployeesController.getChosenEmployee);
  app.delete(
    "/deleteChosenEmployee",
    ChosenEmployeesController.deleteChosenEmployee
  );
};
