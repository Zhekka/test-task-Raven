import React from 'react'
import {Field, reduxForm} from "redux-form";
import style from './LoginForm.module.css'

function LoginForm(props) {
    return (<div className={style.form}>
        <form onSubmit={props.handleSubmit}>
            <div className={style.textField}>
                <Field pattern="^[А-Яа-яЁё\s]+$" type="text" autoComplete="off" placeholder="Name" name={"name"} component={"input"}/>
            </div>
            <div className={style.textField}>
                <Field pattern="^[А-Яа-яЁё\s]+$"type="text" autoComplete="off" placeholder="Surname" name={"surname"} component={"input"}/>
            </div>
            <div className={style.textField}>
                <Field type="text" autoComplete="off" placeholder="Address" name={"address"} component={"input"}/>
            </div>
            <div className={style.textField}>
                <Field type="tel" pattern="[0-9]{9,12}" autoComplete="off" placeholder="Phone" name={"phone"} component={"input"}/>
            </div>

            <div>
                <button  className={style.order}>Order</button>
            </div>
        </form>
    </div>)
}

export const LoginReduxForm = reduxForm({
    form: 'orderForm'
})(LoginForm)