import axios from "axios";
export class SignUpUser {
  // static serverurl = "http://localhost:8005";
  static serverurl = "https://radhakrishnan-backend.onrender.com";

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
  static addword(word) {
    let dataurl = `${this.serverurl}/name/type/tamilwords/add-words?word=${word}`;
    console.log("`````````````````````", dataurl);
    return axios.post(dataurl);
  }

  static getword() {
    let dataurl = `${this.serverurl}/name/type/tamilwords/get-words`;
    console.log("111111111111", dataurl);
    return axios.get(dataurl);
  }
}
