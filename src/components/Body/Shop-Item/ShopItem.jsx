import style from './ShopItem.module.css'
import logo from "../../../img/shop-icon.png";
import React from "react";

export default function ShopItem(props) {

    let actionClick = () => {
        props.addInCart(props.name, props.description, props.price, props.id)
    }

    return (<div className={style.item}>
        <div className={style.content}>
            <img className={style.logo} src={logo} alt="Error"/>


            <div>Назва: {props.name}</div>
            <div>Опис: {props.description}</div>
            <div>Ціна: {props.price} грн</div>

            <button className={style.btn} onClick={actionClick}>Buy
            </button>
        </div>
    </div>)
}