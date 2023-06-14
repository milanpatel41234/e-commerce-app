import React, {useState} from 'react'
import AuthContext from './AuthContext'

let Token = '' ;
let userLogin = null;
let username = null;
if(localStorage.TokenId){
    Token = localStorage.TokenId;
    userLogin = true;
    username = localStorage.UserName;
}

function AuthProvider(props) {
    const [TokenId , setTokenId] = useState(Token)
    const [UserName , setUserName] = useState(username)
    const [LoginState , setLoginState] = useState(userLogin)
   const UserIsVerified = (data)=>{
    const removeSpecialCharacters = (email) => {
        email = email.replace(/@/g, '');
        email = email.replace(/\./g, '');
        return email;
      }
      const cleanedEmail = removeSpecialCharacters(data.email);
    setTokenId(data.idToken)
    setUserName(cleanedEmail)
    localStorage.setItem('TokenId', data.idToken)
    localStorage.setItem('UserName', cleanedEmail)
    setLoginState(true);
    console.log(cleanedEmail , UserName , localStorage.getItem('UserName'));
}
const UserLogout = ()=>{
    setTokenId(null)
    localStorage.removeItem('TokenId')
    localStorage.removeItem('UserName')
    setLoginState(false)
    setUserName(null)
}

    const authcontext = {
        setUserVerified: UserIsVerified,
        setlogout: UserLogout,
        tokenId: TokenId,
        userName:UserName,
        loginState: LoginState
    }
  return (
  <AuthContext.Provider value={authcontext}>
     {props.children}
  </AuthContext.Provider>
  )
}

export default AuthProvider
