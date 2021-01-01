import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Cart from "./components/Header/Cart/Cart";
import Body from "./components/Body/Body";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="app-wrapper-content">
                    <Route path='/main' render={() => <Body/>}/>

                    <Route path='/cart' render={() => <Cart/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
