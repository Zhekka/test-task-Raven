import {connect} from "react-redux";
import Cart from "./Cart";
import {addInCart} from "../../../redux/mainReducer";

let mapStateToProps = (state) => {
    return {
        items: state.mainPage.items,
        totalPrice: state.mainPage.totalPrice
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        addInCart: (body) => {
            dispatch(addInCart(body))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);