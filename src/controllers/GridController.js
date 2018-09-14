const { Grid } = require("../models");

module.exports = {
  async grid(req, res) {
    try {
      const grid = await Grid.findAll({
        where: { floor: req.query.floor }
      });
      let [destructGrid] = grid;
      res.send(destructGrid);
    } catch (err) {
      res.sendStatus(400).send({
        error: "Error , grid not found"
      });
    }
  },
  async createGrid(req, res) {
    try {
      const grid = await Grid.create(req.body);
      res.send(grid);
    } catch (err) {
      res.sendStatus(400).send({
        error: "Error , couldn't create grid"
      });
    }
  },
  async updateGrid(req, res) {
    try {
      let updatedGrid = await Grid.update(
        { collumsAndRows: req.body.collumsAndRows },
        { where: { floor: req.params.floor } }
      );
      console.log(req.body.collumsAndRows);
      res.send(updatedGrid);
    } catch (err) {
      res.sendStatus(400).send({
        error: "Error , couldn't update grid"
      });
    }
  }
};
