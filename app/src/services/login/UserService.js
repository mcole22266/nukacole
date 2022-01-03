const axios = require('axios').default;
// import { authHeader } from '../../helpers/auth-header';

class UserService {
  constructor() {
    console.log('User Service created');
  }

  registerUser = async (user) => {
    await axios.post('api/auth/user/register', user);
  };
}

export default UserService;
