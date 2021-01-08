import {act} from "@testing-library/react";
import fire from "../firebase/firebase";

const ADD_IN_CART = 'ADD_IN_CART'
const PLUS = 'PLUS'
const MINUS = 'MINUS'
const SET_ORDER = 'SET_ORDER'

let removeByAttr = function (arr, attr, value) {
    let i = arr.length;
    while (i--) {
        if (arr[i]
            && arr[i].hasOwnProperty(attr)
            && (arguments.length > 2 && arr[i][attr] === value)) {

            arr.splice(i, 1);

        }
    }
    return arr;
}

let saveStorage = (obj) => {

    let serialObj = JSON.stringify(obj);

    localStorage.setItem("myKey", serialObj);

    let returnObj = JSON.parse(localStorage.getItem("myKey"))

    console.log(returnObj)
}


let initialState = {
    items: [
        {
            id: 0,
            name: 'Ручка',
            description: 'Ручка темно синя',
            price: 25,
            count: 1

        },
        {
            id: 1,
            name: 'Олівець',
            description: 'Олівець графітовий',
            price: 10,
            count: 1
        }, {
            id: 2,
            name: 'Гумка',
            description: 'Гумка звичайна',
            price: 25,
            count: 1
        }, {
            id: 3,
            name: 'Пенал',
            description: 'Пенал шкільний',
            price: 100,
            count: 1
        }, {
            id: 4,
            name: 'Лінійка',
            description: 'Лінійка 20 см, залізна',
            price: 42,
            count: 1
        }, {
            id: 5,
            name: 'Портфейль',
            description: 'Портфель Мікі Маус',
            price: 560,
            count: 1
        },
    ],
    cartItems: [],
    orderInfo: [],
    totalPrice: 0
}


const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDER: {
             let tempObj = {
                 orderInfo: [...state.orderInfo, action.order, state.cartItems ,state.totalPrice],
             }

            console.log(action.order)
            let orderRef = fire.database().ref('order').orderByKey().limitToLast(100)
            fire.database().ref('order').push(tempObj)
            return {
                 ...state,
                 tempObj
            }
        }

        case ADD_IN_CART: {

            const {cartItems} = state;
            const check = cartItems.every(item => {
                return item.id !== action.data.id
            })

            cartItems.forEach(item => {
                if (item.id === action.data.id) {
                    item.count += 1;
                }
            })

            let newCartItem = {
                id: action.data.id,
                name: action.data.name,
                description: action.data.description,
                price: action.data.price,
                count: 1

            }


            if (check) {

                return {
                    ...state,
                    cartItems: [...state.cartItems, newCartItem],
                    totalPrice: state.totalPrice = state.totalPrice + action.data.price
                }
            } else {

                return {
                    ...state,
                    totalPrice: state.totalPrice = state.totalPrice + action.data.price
                }
            }
        }
        case PLUS: {
            let tempcount = state.totalPrice;
            const {cartItems} = state;
            cartItems.forEach(item => {
                if (item.id === action.id) {
                    item.count += 1;
                    tempcount += item.price
                }
            })

            return {
                ...state,
                cartItems: [...state.cartItems],
                totalPrice: tempcount

            }
        }
        case MINUS: {
            let tempcount = state.totalPrice;
            const {cartItems} = state;
            cartItems.forEach(item => {
                if (item.id === action.id) {
                    item.count -= 1;
                    tempcount -= item.price;
                    if (item.count === 0) {
                        removeByAttr(cartItems, 'id', item.id);
                    }
                }
            })

            return {
                ...state,
                cartItems: [...state.cartItems],
                totalPrice: tempcount

            }

        }

        default: {
            return state
        }
    }
}

export const addInCart = (name, description, price, id, count) => ({
    type: ADD_IN_CART,
    data: {name, description, price, id, count}
})

export const addCount = (id) => ({
    type: PLUS,
    id
})

export const setOrder = (order) => ({
    type: SET_ORDER,
    order
})

export const minusItem = (id, price) => ({
    type: MINUS,
    id,
    price
})


export default mainReducer;