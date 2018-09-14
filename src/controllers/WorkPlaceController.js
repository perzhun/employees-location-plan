const { WorkPlace } = require("../models");

module.exports = {
  async createWorkPlace(req, res) {
    try {
      const workPlace = await WorkPlace.create(req.body);
      res.send(workPlace);
    } catch (err) {
      res.sendStatus(400).send({
        error: "Error , couldn't create work place"
      });
    }
  },
  async getWorkPlace(req, res) {
    try {
      const workPlace = await WorkPlace.findAll({
        where: { floor: req.query.floor }
      });
      //let [destructWorkdPlace] = workPlace;
      res.send(workPlace);
    } catch (err) {
      res.sendStatus(400).send({
        error: "Error , work place not found"
      });
    }
  },
  async deleteWorkPlace(req, res) {
    try {
      const workPlace = await WorkPlace.destroy({
        where: { cell: req.query.cell }
      });
      //let [destructWorkdPlace] = workPlace;
      res.send("work place deleted");
    } catch (err) {
      res.sendStatus(400).send({
        error: "Error , work place not found"
      });
    }
  }
};
