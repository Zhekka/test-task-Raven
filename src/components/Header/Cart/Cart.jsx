import style from './Cart.module.css'
import CartItem from "./CartItem/CartItem";

export default function Cart(props) {
    return(<div className={style.cart}>
        <CartItem/>
        Загальна сума: {props.totalPrice} грн
    </div>)
}