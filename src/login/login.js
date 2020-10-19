import React, {useState, useRef} from "react";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import {TextField, Button} from "@material-ui/core";
import {checkEmail} from "../utils";
import "./login.css";

const Login = () => {
    const [errors, setErrors] = useState({
        email: false,
        pass: false
    });
    const emailRef = useRef();
    const passRef = useRef();
    const onError = (msg, key) => {
        const newErr = Object.assign({}, errors);
        newErr[key] = msg;
        setErrors(newErr);
    }
    const onSubmit = (e) => {
        if(!emailRef.current.value || !passRef.current.value || errors.email || errors.pass){
            e.preventDefault();
        }
    }

    return (
        <>
            <LockOpenIcon
                className="login__icon"
                fontSize="large"
                color="primary"/>
            <form
                method="POST"
                onSubmit={onSubmit}
                className="login__form"
                autoComplete="off">
                <TextField autoComplete="email"
                           label="E-mail"
                           type="email"
                           className="login__input"
                           name="email"
                           error={errors.email? true : false}
                           helperText={errors.email}
                           inputRef={emailRef}
                           onBlur={() => {
                               if(!checkEmail(emailRef.current.value)) onError("Enter correct email", "email");
                               else onError(false, "email");
                           }}
                />
                <TextField
                           label="Password"
                           type="password"
                           className="login__input"
                           name="password"
                           inputRef={passRef}
                           onBlur={() => {
                               if(!passRef.current.value) onError("Enter correct password", "pass");
                               else onError(false, "pass");
                           }}
                           error={errors.pass? true : false}
                           helperText={errors.pass}
                />
                <a className="login__forgot" href="" alt="password recovery">Forgot password?</a>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary">
                    Log In
                </Button>
            </form>
        </>
    )
};

export default Login;