import React from 'react'
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import BodyContainer from "./components/Body/BodyContainer";
import HeadContainer from "./components/Header/HeadContainer";
import CartContainer from "./components/Header/Cart/CartContainer";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeadContainer />
                <div className="app-wrapper-content">
                    <Route path='/main' render={() => <BodyContainer />}/>

                    <Route path='/cart' render={() => <CartContainer/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
