import React from 'react'
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import logo from '../../img/shop-icon.png'

export default function Header() {
    return (
        <div className={style.header}>
            <NavLink to="/main" activeClassName=""><img className={style.logo} src={logo}/></NavLink>
            <span className={style.cart}>
                <NavLink to="/cart" activeClassName="">Cart</NavLink>
            </span>
        </div>
    )
}