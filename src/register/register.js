import React from "react";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import {Button, TextField} from "@material-ui/core";
import "./register.css";

const Register = () => {
    return (
        <>
            <LockOpenIcon
                className="login__icon"
                fontSize="large"
                color="primary"/>
            <form className="register__form"  autoComplete="off">
                <TextField
                           label="E-mail"
                           type="email"
                           className="register__input"
                           name="email"
                           autoComplete="email"
                    // error="Enter correct email"
                />
                <TextField
                           label="Password"
                           type="password"
                           className="register__input"
                           name="password"
                    // error="Enter correct password"
                />
                <TextField
                           label="Confirm password"
                           type="password"
                           className="register__input"
                           name="confirm"
                    // error="Enter correct password"
                />
                <TextField
                           onInput={(e) => console.log(e.target.value)}
                           label="Phone number"
                           type="tel"
                           className="register__input"
                           name="phone"
                           autoComplete="tel"
                    // error="Enter correct password"
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