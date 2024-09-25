import { Router } from 'express';
import {
  createAccount,
  deleteAccount,
  getAccount,
  getAllAccounts,
  updateAccount
} from '../controllers/account.controller.js';

const Accounts = Router();

// Rota para obter todas as contas e criar uma nova conta
Accounts.route('/')
  .get(async (req, res) => {
    try {
      await getAllAccounts(req, res);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  })
  .post(async (req, res) => {
    try {
      await createAccount(req, res);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

// Rota para obter, atualizar e excluir uma conta específica
Accounts.route('/:id')
  .get(async (req, res) => {
    try {
      await getAccount(req, res);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  })
  .put(async (req, res) => {
    try {
      await updateAccount(req, res);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  })
  .delete(async (req, res) => {
    try {
      await deleteAccount(req, res);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

export default Accounts;
