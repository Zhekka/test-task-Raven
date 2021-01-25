import React from "react";
import {LoginReduxForm} from "./LoginForm";
import style from "./Login.module.css"

function Login(props) {

    let onSubmit = (formData) => {
        props.setOrder(formData)
    }

    return (
        <div className={style.content}>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;