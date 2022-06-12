const { Op } = require("sequelize");
const { Transaction, Category } = require("../database");
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

  addJoinModels = async (req, res, next) => {
    const { category, ...body } = req.body;
    try {
      const newInstance = await this.model.create({ ...body });
      const join = await Category.findOne({ where: { name: category } });
      await join.addTransaction(newInstance);
      res.send("item has been created");
    } catch (err) {
      next(err);
    }
  };

  getWithJoin = (req, res, next) => {
    return this.model
      .findAll({
        attributes: { exclude: ["categoryId"] },
        include: { model: Category },
      })
      .then((resp) => res.send(resp))
      .catch((err) => next(err));
  };
}

const transactionController = new TransactionModel(Transaction);

module.exports = transactionController;
