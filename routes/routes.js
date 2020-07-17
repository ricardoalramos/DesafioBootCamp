const express = require('express');
const transactionRouter = express.Router();

const {
  getAll,
  create,
  update,
  remove,
} = require('../services/transactionService');

const app = express();

transactionRouter.route('/').post(create);
transactionRouter.route('/:id').put(update).delete(remove);
transactionRouter.route('/:period').get(getAll);

module.exports = transactionRouter;
