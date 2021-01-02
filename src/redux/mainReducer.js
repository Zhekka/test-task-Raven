const ADD_IN_CART = 'ADD_IN_CART'

let initialState = {
    items: [
        {
            name: 'Ручка',
            description: 'Ручка темно синя',
            price: 25
        },
        {
            name: 'Олівець',
            description: 'Олівець графітовий',
            price: 10
        }, {
            name: 'Гумка',
            description: 'Гумка звичайна',
            price: 25
        }, {
            name: 'Пенал',
            description: 'Пенал шкільний',
            price: 100
        }, {
            name: 'Лінійка',
            description: 'Лінійка 20 см, залізна',
            price: 42
        }, {
            name: 'Портфейль',
            description: 'Портфель Мікі Маус',
            price: 560
        },
    ],
    totalPrice: 0
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_IN_CART: {
            return {
                ...state,
                totalPrice: state.totalPrice = state.totalPrice + action.body
            }
        }
        default: {
            return state
        }
    }
}
export const addInCart = (body) => ({
    type: ADD_IN_CART,
    body: body
})

export default mainReducer;