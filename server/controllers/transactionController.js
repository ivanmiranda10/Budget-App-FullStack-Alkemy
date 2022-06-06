const { Op } = require("sequelize");
const { Transaction } = require("../database");
const ModelCrud = require("./index");

class TransactionModel extends ModelCrud {
  constructor(model) {
    super(model);
  }

  getDescription = (req, res, next) => {
    const { desc } = req.query;
    return this.model
      .findAll({ where: { description: { [Op.iLike]: `%${desc}%` } } })
      .then((response) => res.send(response))
      .catch((err) => next(err));
  };
}

const transactionController = new TransactionModel(Transaction);

module.exports = transactionController;
