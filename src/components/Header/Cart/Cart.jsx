import React from "react"
import style from './Cart.module.css'
import CartItem from "./CartItem/CartItem";

export default function Cart(props) {

    let cartElement = props.cartItems.map((data) => {
        return <CartItem id={data.id} minus={props.minusItem} plus={props.addCount} name={data.name} description={data.description} price={data.price} count={data.count}/>
    })


    return (<div className={style.cart}>
        <div className={style.total}>Загальна сума: {props.totalPrice} грн</div>
        {cartElement}
    </div>)
}