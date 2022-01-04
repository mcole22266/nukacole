const axios = require('axios').default;

// import { authHeader } from '../../helpers/auth-header';

class UserService {
  constructor() {
    console.log('User Service created');
  }

  registerUser = async (user) => {
    // Register the user
    const registeredUser = await axios.post('api/auth/user/register', user)
      .then((res) => {
        const loggedInUser = this.loginUser(res.data);
        return loggedInUser;
      })
      .catch((err) => {
        console.log(err);
      });

    return registeredUser;
  };

  loginUser = async (user) => {
    const loggedInUser = await axios.post('api/auth/user/login', user)
      .then((res) => {
        // Store user information locally if token is present -- effectively logging the user in
        if (res.data.token) {
          localStorage.setItem('user', JSON.stringify(res.data));
        }
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });

    return loggedInUser;
  };

  logoutUser = () => {
    localStorage.removeItem('user');
  };
}

export default UserService;
