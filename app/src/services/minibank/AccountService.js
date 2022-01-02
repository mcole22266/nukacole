const axios = require('axios').default;

class AccountService {
  constructor() {
    console.log('Account Service created');
  }

  fetchAccounts = async () => {
    // Fetch all accounts
    const response = await axios.get('api/minibank/account');
    return response.data;
  }

  fetchAccount = async (id) => {
    // Fetch a single account
    const response = await axios.get(`api/minibank/account/${id}`);
    return response.data;
  }

  addActivity = async (id, newActivity) => {
    // Add a new activity entry to a given account
    await axios.post(`api/minibank/account/${id}`, newActivity);
  }
}

export default AccountService;
