import style from './ShopItem.module.css'
import logo from "../../../img/shop-icon.png";
import React from "react";

export default function ShopItem(props) {

    return (<div className={style.item}>
        <div className={style.content}>
            <img className={style.logo} src={logo} alt="Error"/>

            <div>Назва: {props.name}</div>
            <div>Опис: {props.description}</div>
            <div>Ціна: {props.price} грн</div>

            <button>Buy</button>
        </div>
    </div>)
}