import axios from "./api";

const AuthServise = {
  async userRegister(user) {
    const { data } = await axios.post(`/register?name=${user.name}&email=${user.email}&password=${user.password}`);

    return data;
  },
  async userLogin(user) {
    const { data } = await axios.post(`/login?email=${user.email}&password=${user.password}`);
    return data;
  },
  async getUser() {
    const {data} = await axios.get("/users"); 
    return data;
  },
};

export default AuthServise;
