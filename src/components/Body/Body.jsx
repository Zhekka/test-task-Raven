import React from 'react'
import ShopItem from "./Shop-Item/ShopItem";
import style from './Body.module.css'

export default function Body() {
    return (<div className={style.item}>
        <ShopItem/>
        <ShopItem/>
        <ShopItem/>
        <ShopItem/>

    </div>)
}