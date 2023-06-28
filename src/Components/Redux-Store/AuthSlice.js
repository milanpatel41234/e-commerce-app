import { createSlice } from "@reduxjs/toolkit";

let Token = "";
let userLogin = null;
let username = null;
if (localStorage.idToken) {
  Token = localStorage.idToken;
  userLogin = true;
  username = localStorage.UserName;
}
const initialState = {
  idToken: Token,
  UserName: username,
  LoginState: userLogin,
};

const AuthSlice = createSlice({
  name: "AuthState",
  initialState,
  reducers: {
    setUserLogout: (state) => {
      state.idToken = null;
      localStorage.removeItem("idToken");
      localStorage.removeItem("UserName");
      state.LoginState = false;
      state.UserName = null;
    },
    setUserLogin: (state , action)=>{
        const removeSpecialCharacters = (email) => {
            email = email.replace(/@/g, '');
            email = email.replace(/\./g, '');
            return email;
          }
          const cleanedEmail = removeSpecialCharacters(action.payload.email);
        state.idToken = action.payload.idToken;
        localStorage.setItem('idToken', action.payload.idToken)
        localStorage.setItem('UserName', cleanedEmail)
        state.LoginState = true;
        state.UserName = cleanedEmail;
        console.log(cleanedEmail , localStorage.getItem('UserName'));
    }
  },
});

export default AuthSlice;
