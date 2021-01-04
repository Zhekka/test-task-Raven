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
        addInCart: (name, description, price,id,count) => {
            dispatch(addInCart(name, description, price,id,count))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);