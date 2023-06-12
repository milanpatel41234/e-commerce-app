import { useContext, useRef, useState } from "react";
import classes from "./AuthForm.module.css";
import AuthContext from "../Store/AuthContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AuthForm = () => {
  const history = useHistory()
  const [isLogin, setIsLogin] = useState(true);
  const [SendingRequest,setSendingRequest] = useState(false);
  const EmailRef = useRef();
  const PasswordRef = useRef();
  const ctx = useContext(AuthContext)
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
 
  const HandleSubmit = async (e) => {
    e.preventDefault();
   setSendingRequest(true);
    const Email = EmailRef.current.value;
    const Password = PasswordRef.current.value;
    if (isLogin) {
      try {
        const VarifyUser = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD0MqdL_RefR-qyUUwgnzLvNKPNaEqFjls',
        {
          method: "POST",
          body: JSON.stringify({
            email: Email,
            password: Password,
            returnSecureToken: true,
          })
        });
        const data = await VarifyUser.json();
        if (data.error) {
          throw new Error(data.error.message);
        }else{
          ctx.setUserVerified(data.idToken);
          alert('Log in successfull')
          history.replace('/')
        }
      } catch (error) {
        alert(error.message);
      }
    } else {
      try {
        const newUser = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD0MqdL_RefR-qyUUwgnzLvNKPNaEqFjls",
          {
            method: "POST",
            body: JSON.stringify({
              email: Email,
              password: Password,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await newUser.json();
        console.log(data.error)
        if (data.error) {
          throw new Error(data.error.message);
        }else {
          alert('Account created successfully')
        }
      } catch (error) {
        if (error.message === "EMAIL_EXISTS") {
          alert(
            "This EMAIL already exists. Please try login or create a new one with different email addresses"
          );
        } else {
          alert("Authentication failed");
        }
      }
    }
    setSendingRequest(false);
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={HandleSubmit}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={EmailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={PasswordRef} />
        </div>
        <div className={classes.actions}>
        <button
            type="submit"
            className={`${classes.toggle}{${classes.login}`}
          >
            {!SendingRequest ? (isLogin ? "Log in" : "Create Account"):"Loding..."}
          </button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
