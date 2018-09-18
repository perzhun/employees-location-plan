const { ChosenEmployee } = require("../models");

module.exports = {
  async createChosenEmployee(req, res) {
    try {
      const chosenEmployee = await ChosenEmployee.create(req.body);
      res.send(chosenEmployee);
    } catch (err) {
      res.sendStatus(400).send({
        error: "Error , couldn't create employee"
      });
    }
  },
  async getChosenEmployee(req, res) {
    try {
      const chosenEmployee = await ChosenEmployee.findAll({});
      //let [destructWorkdPlace] = workPlace;
      res.send(chosenEmployee);
    } catch (err) {
      res.sendStatus(400).send({
        error: "Error , employee list not found"
      });
    }
  },
  async deleteChosenEmployee(req, res) {
    try {
      await ChosenEmployee.destroy({
        where: { name: req.query.name }
      });
      //let [destructWorkdPlace] = workPlace;
      res.send("employee deleted");
    } catch (err) {
      res.sendStatus(400).send({
        error: "Error , employee not found"
      });
    }
  }
};
