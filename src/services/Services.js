import axios from "axios";
export class SignUpUser {
  static serverurl = "http://localhost:8005";

  static usersignup(signup) {
    let dataurl = `${this.serverurl}/name/type/signup/create-user`;
    console.log("`````````````````````", dataurl);
    return axios.post(dataurl, signup);
  }
  static userlogin(login) {
    let dataurl = `${this.serverurl}/name/type/signup/login?username=${login.userName}&password=${login.password}`;
    console.log("111111111111", dataurl);
    return axios.get(dataurl, login);
  }
}
