import {connect} from "react-redux";
import {addInCart} from "../../redux/mainReducer";
import Header from "./Header";

let mapStateToProps = (state) => {
    return {
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);