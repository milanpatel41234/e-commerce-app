import React, {useState} from 'react'
import AuthContext from './AuthContext'

let Token = '' ;
let userLogin = null;
if(localStorage.TokenId){
    Token = localStorage.TokenId;
    userLogin = true;
}

function AuthProvider(props) {
   const [TokenId , setTokenId] = useState(Token)
   const [LoginState , setLoginState] = useState(userLogin)
   const UserIsVerified = (idToken)=>{
    setTokenId(idToken)
    localStorage.setItem('TokenId', idToken)
    setLoginState(true)
}
const UserLogout = ()=>{
    setTokenId(null)
    localStorage.removeItem('TokenId')
    setLoginState(false)
}

    const authcontext = {
        setUserVerified: UserIsVerified,
        setlogout: UserLogout,
        tokenId: TokenId,
        loginState: LoginState
    }
  return (
  <AuthContext.Provider value={authcontext}>
     {props.children}
  </AuthContext.Provider>
  )
}

export default AuthProvider
