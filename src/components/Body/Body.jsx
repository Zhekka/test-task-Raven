import React from 'react'
import ShopItem from "./Shop-Item/ShopItem";
import style from './Body.module.css'

function Body(props) {

    let shopElements = props.items.map((data) => {
        return <ShopItem name={data.name} description={data.description} price={data.price} />
    })

    console.log(props.items)
    return (<div className={style.item}>
        {shopElements}
    </div>)
}

export default Body;
