import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./AuthForm.module.css";
import amazon from './logos/amazon.png';
import { SIGNIN_URL, SIGNUP_URL, expireIn } from "./Constants";
import useHtttp from "./hooks/use-http";
import { authActions } from "./store/auth-slice";
import { useHistory } from "react-router-dom";

const AuthForm = () => {

    const isAuthenticated = useSelector( state => state.auth.isAuthenticated);
    const [isLogin, setIsLogin] = useState(true);
    const [checked, setChecked]= useState(false);
    const [password,setPassword] = useState("");
    const [validationError, setValidationError] = useState({error: false,message:""});
    const email= useRef()
    const repeatedPassword = useRef();
    const dispatch= useDispatch();
    const {isLoading,error,sendRequest} = useHtttp();
    const history = useHistory();


    const authenticationMode=()=>{
        setIsLogin((prevState)=> {return !prevState});
    }

    const submitHandler =(event) => {

        const getResponse=(data)=>{
            console.log(data);
            if(data.idToken && data.email){
                dispatch(authActions.login({
                    idToken: data.idToken,
                    expiresIn: data.expiresIn ? data.expiresIn: expireIn,
                    email:data.email
                }));
            }
            history.replace("/");
        }
        event.preventDefault();
        if(!isLogin && password!== repeatedPassword.current.value){
            setValidationError({error: true,message:"Password don't match"});
            return;
        }
        const enteredEmail = email.current.value;
        let requestConfig;
        if(isLogin){
            requestConfig= {
                url:SIGNIN_URL, 
                method: "POST", 
                body:JSON.stringify({
                    email: enteredEmail,
                    password: password
                }),
                headers: {"Content-Type": "application/json"}}

        }else{
            requestConfig= {
                url:SIGNUP_URL, 
                method: "POST", 
                body:JSON.stringify({
                    email: enteredEmail,
                    password: password,
                    returnSecureToken:true
                }),
                headers: {"Content-Type": "application/json"}}
        }

        //console.log(requestConfig);
        sendRequest(requestConfig,getResponse);
    }

    const passwordChangeHandler = (event) =>{setPassword(event.target.value);}

    const logoff = (event)=> { 
        event.preventDefault(); 
        dispatch(authActions.logoff())
        history.replace("/");
    }


    return (
        <React.Fragment>
        <div className={`row ${classes.alignment}`}>
        <div className={classes["Amazon__logo"]}>
                <img src={amazon} alt="amazon"  className={classes["Amazon__logo__img"]}/>
        </div>
        </div>
        {!isAuthenticated &&
        <div className={`row`}>
            <div className="col-xl-4 col-lg-4 col-sm-4 col-2"></div>
            <div className={` col-xl-3 col-lg-4 col-sm-4 col-8 ${classes.padding__form}`}>

                <section className={classes.authform}>
                <div className={classes.Form__header_font}>{isLogin ? "Sign-In": 'Create Account'}</div>
                <form onSubmit={submitHandler}>
                    
                    <div className={classes.form__control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" ref={email} className={classes.authform__input}></input>
                    </div>
                    <div className={classes.form__control}>
                        <label htmlFor="assword">Password</label>
                        <input type="password" id="password" value={password} required placeholder="At least 7 characters" className={classes.authform__input}
                        onChange={passwordChangeHandler}></input>
                    </div>
                    {!isLogin && 
                    <div className={classes.form__control}>
                        <label htmlFor="password again">Password  again</label>
                        <input type="password" id="repeatedPassword" ref={repeatedPassword} className={classes.authform__input}></input>
                    </div>}
                    {checked && <p>{password}</p>}
                    <div className={classes.showPassword}>
                        <input type="checkbox" defaultChecked={checked} onChange={()=> {setChecked(!checked)}} />
                        <div>Show Password</div>
                    </div>
                    <div>
                        {!isLogin && validationError.error && <p className={classes.error}>{validationError.message}</p>} 
                        {error && <p className={classes.error}>{error}</p>} 
                        <button className={classes.button}>Continue</button>
                    </div>
                    <p className={classes.disclaimer}>{isLogin ?"By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.": "By creating an account or logging in, you agree to Amazon’s Conditions of Use and Privacy Policy."}</p>
                </form>
                </section>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-4 col-2"></div>
        </div>}

        {isAuthenticated && 
        <div className={`row`}>
            <div className="col-xl-4 col-lg-4 col-sm-4 col-2"></div>
            <div className={` col-xl-3 col-lg-4 col-sm-4 col-8 ${classes.padding__form}`}>

                <section className={classes.authform}>
                <div className={classes.Form__header_font}>{"Logoff"}</div>
                <form onSubmit={logoff}>
                    <div>
                        {error && <p className={classes.error}>{error}</p>} 
                        <button className={classes.button}>Continue</button>
                    </div>
                </form>
                </section>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-4 col-2"></div>
        </div>}


        {!isAuthenticated && <div className={`row`}>
            <div className="col-xl-4 col-lg-4 col-sm-4 col-2"></div>
            <div className={` col-xl-3 col-lg-4 col-sm-4 col-8 ${classes.padding__form__switch}`}>
                <p className={classes.switch__text}>{isLogin ?"New to Amazon": "Already have an account?"}</p>
                <button className={classes.switch__button} onClick={authenticationMode}>{isLogin ? "Create your Amazon Account": "Sign in"}</button>
            </div>
        </div>}
        </React.Fragment>
    )

}

export default AuthForm;