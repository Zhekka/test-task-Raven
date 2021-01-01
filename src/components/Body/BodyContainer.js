import {connect} from "react-redux";
import Body from "./Body";

let mapStateToProps = (state) => {
    return {
        items: state.mainPage.items
    }
}


let mapDispatchToProps = (dispatch) => {
    return 0
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);