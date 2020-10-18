import React, {useState, useRef} from "react";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import {TextField, Button} from "@material-ui/core";
import {checkEmail} from "../utils";
import "./login.css";

const Login = () => {
    const [error, setError] = useState(false);
    const emailRef = useRef();
    return (
        <>
            <LockOpenIcon
                className="login__icon"
                fontSize="large"
                color="primary"/>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="login__form"
                autoComplete="off">
                <TextField autoComplete="email"
                           label="E-mail"
                           type="email"
                           className="login__input"
                           name="email"
                           error={error? true : false}
                           helperText={error}
                           inputRef={emailRef}
                           onBlur={() => {
                               if(!checkEmail(emailRef.current.value)) setError("Enter correct email");
                               else setError(false);
                           }}
                />
                <TextField
                           label="Password"
                           type="password"
                           className="login__input"
                           name="password"
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