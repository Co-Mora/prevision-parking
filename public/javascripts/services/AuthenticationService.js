import API from '@/services/API'


const login = (credentials) => {
  return API().post('auth/login', credentials).then(response => {
    if(response.data.auth === 200) {

    }
  });
};

const register = (credentials) => {
  return API().post('register', credentials)
};


module.exports = {
  login,
  register
};
