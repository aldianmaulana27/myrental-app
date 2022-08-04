import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8090/user/api";

class UserService {
  getUsers() {
    return axios.get(USER_API_BASE_URL + "/get");
  }

  createUser(user) {
    return axios.post(USER_API_BASE_URL + "/add", user);
  }

  loginUser(login) {
    return axios.post(USER_API_BASE_URL + "/verify", login);
  }
}

export default new UserService();
