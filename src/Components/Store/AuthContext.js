import { createContext } from 'react'
const AuthContext = createContext({
    tokenId: '',
    setUserVerified: (data)=>{},
    loginState: '',
    setlogout: ()=>{},
})
export default AuthContext
