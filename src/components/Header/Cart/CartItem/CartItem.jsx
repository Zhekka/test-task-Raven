import React from "react";
import style from './CartItem.module.css'
import logo from "../../../../img/shop-icon.png";

export default function CartItem(props) {

    let price = props.count * props.price;

    return (
        <div>
            <div className={style.content}>
                <img className={style.logo} src={logo} alt="Error"/>
                <div className={style.desc}>
                    <div>Назва: {props.name}</div>
                    <div>Опис: {props.description}</div>
                    <div>Ціна за шт: {props.price} грн</div>
                </div>
                <div className={style.btn}>
                    <button onClick={() => {
                        props.minus(props.id, price)
                    }}>-
                    </button>
                    {props.count}
                    <button onClick={() => {
                        props.plus(props.id)
                    }}>+
                    </button>
                    <div className={style.price}>{price} грн</div>
                </div>

            </div>
        </div>
    )
}