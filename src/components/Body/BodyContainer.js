import {connect} from "react-redux";
import Body from "./Body";
import {addInCart} from "../../redux/mainReducer";

let mapStateToProps = (state) => {
    return {
        items: state.mainPage.items,
        totalPrice:state.mainPage
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        addInCart: (body) => {
            dispatch(addInCart(body))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);