import express from 'express';
import payments from './routes/payment.js'
import inventory from './routes/inventory.js';
import Store from './routes/store.js';
import Accounts from './routes/accounts.js';
import Orders from './routes/orders.js';

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));
app.use('/accounts', Accounts)
app.use('/inventory', inventory)
app.use('/orders', Orders)
app.use('/payments', payments)
app.use('/store', Store)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});