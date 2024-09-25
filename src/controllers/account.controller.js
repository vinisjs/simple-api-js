// Armazenamento em memória para contas
const accounts = [];
let nextId = 1;

// Função para criar uma conta
export async function createAccount(req, res) {
  try {
    const { name, email } = req.body;

    // Verifique se todos os campos necessários estão presentes
    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }

    // Crie uma nova conta e adicione ao armazenamento em memória
    const newAccount = { id: nextId++, name, email };
    accounts.push(newAccount);

    res.status(201).json(newAccount);
  } catch (error) {
    console.error('Error creating account:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

// Função para obter uma conta pelo ID
export async function getAccount(req, res) {
  try {
    const { id } = req.params;

    // Busque a conta pelo ID no armazenamento em memória
    const account = accounts.find(acc => acc.id === parseInt(id));

    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }

    res.status(200).json(account);
  } catch (error) {
    console.error('Error retrieving account:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

// Função para obter todas as contas
export async function getAllAccounts(req, res) {
  try {
    // Retorne todas as contas do armazenamento em memória
    res.status(200).json(accounts);
  } catch (error) {
    console.error('Error retrieving all accounts:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

// Função para atualizar uma conta pelo ID
export async function updateAccount(req, res) {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    // Encontre o índice da conta a ser atualizada
    const index = accounts.findIndex(acc => acc.id === parseInt(id));
    if (index === -1) {
      return res.status(404).json({ message: 'Account not found' });
    }

    // Atualize a conta no armazenamento em memória
    if (name) accounts[index].name = name;
    if (email) accounts[index].email = email;

    res.status(200).json(accounts[index]);
  } catch (error) {
    console.error('Error updating account:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

// Função para excluir uma conta pelo ID
export async function deleteAccount(req, res) {
  try {
    const { id } = req.params;

    // Encontre o índice da conta a ser excluída
    const index = accounts.findIndex(acc => acc.id === parseInt(id));
    if (index === -1) {
      return res.status(404).json({ message: 'Account not found' });
    }

    // Exclua a conta do armazenamento em memória
    accounts.splice(index, 1);

    res.status(200).json({ message: 'Account deleted successfully' });
  } catch (error) {
    console.error('Error deleting account:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
