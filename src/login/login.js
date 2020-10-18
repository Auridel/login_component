import React from "react";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import {TextField, Button} from "@material-ui/core";
import "./login.css";

const Login = () => {
    return (
        <>
            <LockOpenIcon
                className="login__icon"
                fontSize="large"
                color="primary"/>
            <form className="login__form"  autoComplete="off">
                <TextField id="outlined-basic"
                           label="E-mail"
                           type="email"
                           className="login__input"
                           // error="Enter correct email"
                />
                <TextField id="outlined-basic"
                           label="Password"
                           type="password"
                           className="login__input"
                           // error="Enter correct password"
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