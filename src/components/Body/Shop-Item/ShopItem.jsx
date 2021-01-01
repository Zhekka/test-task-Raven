import style from './ShopItem.module.css'
import logo from "../../../img/shop-icon.png";
import React from "react";

export default function ShopItem() {
    return (<div className={style.item}>
        <div className={style.content}>
            <img className={style.logo} src={logo}/>
            <div>Назва:</div>
            <div>Опис:</div>
            <div>Ціна:</div>
            <button>Buy</button>
        </div>
    </div>)
}