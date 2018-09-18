const EmployeeController = require("./controllers/EmployeesController");
const GridController = require("./controllers/GridController");
const WorkPlaceController = require("./controllers/WorkPlaceController");
const ChosenEmployeesController = require("./controllers/ChosenEmployeesController");

module.exports = app => {
  app.get("/api/employees", EmployeeController.employees);
  app.post("/api/createGrid", GridController.createGrid);
  app.get("/api/grid", GridController.grid);
  app.put("/api/updateGrid/:floor", GridController.updateGrid);
  app.post("/api/createWorkPlace", WorkPlaceController.createWorkPlace);
  app.get("/api/getWorkPlace", WorkPlaceController.getWorkPlace);
  app.delete("/api/deleteWorkPlace", WorkPlaceController.deleteWorkPlace);
  app.post(
    "/api/createChosenEmployee",
    ChosenEmployeesController.createChosenEmployee
  );
  app.get(
    "/api/getChosenEmployee",
    ChosenEmployeesController.getChosenEmployee
  );
  app.delete(
    "/api/deleteChosenEmployee",
    ChosenEmployeesController.deleteChosenEmployee
  );
};
