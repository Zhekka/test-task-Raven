import React from 'react'
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import logo from '../../img/shop-icon.png'
import cart from '../../img/cart-img.png'

export default function Header(props) {
    return (
        <div className={style.header}>
            <NavLink to="/main" activeClassName=""><img className={style.logo} src={logo} alt="Home"/></NavLink>
            <span className={style.cart}>
                {(props.totalPrice === 0) ? <span></span> : props.totalPrice + ' грн'}
                <NavLink to="/cart" activeClassName=""><img src={cart} alt="Корзина"/></NavLink>
            </span>
        </div>
    )
}