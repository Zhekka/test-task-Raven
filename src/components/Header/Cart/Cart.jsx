import React from "react"
import style from './Cart.module.css'
import CartItem from "./CartItem/CartItem";
import Login from "./Form/Login";

export default function Cart(props) {

    let cartElement = props.cartItems.map((data) => {
        return <CartItem id={data.id} minus={props.minusItem} plus={props.addCount} name={data.name}
                         description={data.description} price={data.price} count={data.count}/>
    })


    return (<div>

        {(props.totalPrice === 0)?<div className={style.empty}>Корзина пуста</div>:
            <CartShower setOrder={props.setOrder} cartElement={cartElement} totalPrice={props.totalPrice}/>}


    </div>)
}

function CartShower(props) {
    return(<span className={style.cart}>
            <span>{props.cartElement}</span>

            <div><Login setOrder={props.setOrder}/></div>

            <div className={style.total}>Загальна сума: {props.totalPrice} грн</div>
    </span>
    )
}