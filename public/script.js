const apiUrl = 'http://localhost:3000/accounts'; // Altere para a URL do seu backend

// Função para criar uma conta
document.getElementById('createAccountForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('createAccountName').value;
  const email = document.getElementById('createAccountEmail').value;

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email })
  });
  const data = await response.json();
  document.getElementById('results').innerText = `Account Created: ${JSON.stringify(data)}`;
});

// Função para atualizar uma conta
document.getElementById('updateAccountForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = document.getElementById('updateAccountId').value;
  const name = document.getElementById('updateAccountName').value;
  const email = document.getElementById('updateAccountEmail').value;

  const response = await fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email })
  });
  const data = await response.json();
  document.getElementById('results').innerText = `Account Updated: ${JSON.stringify(data)}`;
});

// Função para excluir uma conta
document.getElementById('deleteAccountForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = document.getElementById('deleteAccountId').value;

  const response = await fetch(`${apiUrl}/${id}`, {
    method: 'DELETE'
  });
  const data = await response.json();
  document.getElementById('results').innerText = `Account Deleted: ${JSON.stringify(data)}`;
});

// Função para obter todas as contas
document.getElementById('getAllAccountsButton').addEventListener('click', async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  document.getElementById('results').innerText = `All Accounts: ${JSON.stringify(data)}`;
});