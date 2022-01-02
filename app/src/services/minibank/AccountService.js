class AccountService {
  constructor() {
    console.log('Account Service created');
  }

  fetchAccounts = async () => {
    const res = await fetch('api/minibank/account');

    const accounts = await res.json();
    return accounts;
  }

  fetchAccount = async (id) => {
    const res = await fetch(`api/minibank/account/${id}`);

    const account = await res.json();
    return account;
  }

  addActivity = async (id, newActivity) => {
    await fetch(`api/minibank/account/${id}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newActivity),
    });
  }
}

module.exports = AccountService;
