import React, {useRef, useState} from "react";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import {Button, TextField} from "@material-ui/core";
import {phoneMask, checkEmail, checkPass} from "../utils";
import "./register.css";

const Register = () => {
    const [errors, setErrors] = useState({
        email: false,
        pass: false
    })
    const phoneRef = useRef();
    const passRef = useRef();
    const confirmRef = useRef();
    const emailRef = useRef();
    const onEmailError = (msg) => {
        const newErr = Object.assign({}, errors);
        newErr.email = msg;
        setErrors(newErr);
    }
    const onPassError = (msg) => {
        const res = checkPass(passRef.current.value, confirmRef.current.value);
        if(res === "ok") {
            const newErr = Object.assign({}, errors);
            newErr.pass = false;
            if (errors.pass) setErrors(newErr);
        }
        else if (res === "fail") {
            const newErr = Object.assign({}, errors);
            newErr.pass = msg;
            if(!errors.pass) setErrors(newErr);
        }
    }


    return (
        <>
            <LockOpenIcon
                className="login__icon"
                fontSize="large"
                color="primary"/>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="register__form"
                autoComplete="off">
                <TextField
                           label="E-mail"
                           inputRef={emailRef}
                           onBlur={() => {
                               if(!checkEmail(emailRef.current.value)) {
                                   onEmailError("Enter correct email");
                               }else {
                                   onEmailError(false);
                               }
                           }}
                           type="email"
                           className="register__input"
                           name="email"
                           autoComplete="email"
                           error={errors.email? true : false}
                           helperText={errors.email}
                />
                <TextField
                           label="Password"
                           inputRef={passRef}
                           type="password"
                           className="register__input"
                           name="password"
                           error={errors.pass? true : false}
                           helperText={errors.pass}
                           onBlur={() => onPassError("Passwords doesn't match")}
                />
                <TextField
                           label="Confirm password"
                           inputRef={confirmRef}
                           type="password"
                           className="register__input"
                           name="confirm"
                           error={errors.pass? true : false}
                           helperText={errors.pass}
                           onBlur={() => onPassError("Passwords doesn't match")}
                />
                <TextField
                           onInput={(e) => {
                               console.log(phoneRef.current.value);
                               phoneMask(e, phoneRef)}}
                           onFocus={(e) => phoneMask(e, phoneRef)}
                           onBlur={(e) => phoneMask(e, phoneRef)}
                           inputRef={phoneRef}
                           label="Phone number"
                           type="tel"
                           className="register__input"
                           name="phone"
                           autoComplete="tel"
                           defaultValue="+7"
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary">
                    Sign Up
                </Button>
            </form>

        </>
    )
};

export default Register;