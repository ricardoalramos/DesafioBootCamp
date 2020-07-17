const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require('../models/TransactionModel');

exports.getAll = async (req, res) => {
  try {
    const period = req.params.period;
    const transactions = await TransactionModel.find({ yearMonth: period });
    if (!transactions) {
      res.status(400).send({ message: 'Nenhuma Transação Encontrada' });
    } else {
      res.status(200).send(transactions);
    }
  } catch (err) {
    res.status(500).send({ message: 'Erro ao obter as transações' });
  }
};

exports.create = async (req, res) => {
  try {
    const data = await TransactionModel.create(req.body);
    if (data) {
      res.send({ message: 'Transação Inserida com Sucesso' });
    } else {
      res.status(400).send({ message: 'Transação não incluida' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Erro ao gravar nova transação' });
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await TransactionModel.findByIdAndUpdate(
      ObjectId(id),
      req.body,
      { new: true }
    );
    if (!data) {
      res.status(404).send({ message: 'Nenhuma Transação Encontrada' });
    } else {
      res.status(200).send(data);
    }
  } catch (err) {
    res.status(500).send({ message: 'Erro ao atualizar a Grade id: ' + id });
  }
};

exports.remove = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await TransactionModel.findByIdAndDelete(ObjectId(id));

    if (data.length > 0) {
      res
        .status(404)
        .send({ message: 'Nenhuma transação encontrada para exclusão' });
    } else {
      res.send({ message: 'Transação Excluida com Sucesso' });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Nao foi possivel deletar a Transação id: ' + id });
  }
};
