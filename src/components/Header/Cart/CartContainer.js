import {connect} from "react-redux";
import Cart from "./Cart";
import {addCount, minusItem, setOrder} from "../../../redux/mainReducer";

let mapStateToProps = (state) => {
    return {
        items: state.mainPage.items,
        cartItems: state.mainPage.cartItems,
        totalPrice: state.mainPage.totalPrice
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        addCount: (id) => {
            dispatch(addCount(id))

        },
        minusItem: (id, price) => {
            dispatch(minusItem(id, price))

        },
        setOrder: (order) => {
            dispatch(setOrder(order))

        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);