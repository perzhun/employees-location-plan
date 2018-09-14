const { Employee } = require("../models");

module.exports = {
  async employees(req, res) {
    try {
      const employeeList = await Employee.findAll({ raw: true });
      if (!employeeList) {
        return res.status(403).send({
          error: "Error , employees not found"
        });
      }
      res.send(employeeList);
    } catch (err) {
      res.status(400).send({
        error: "Error , employees not found"
      });
    }
  }
};
