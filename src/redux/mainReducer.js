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
        },{
            name: 'Гумка',
            description: 'Гумка звичайна',
            price: 25
        },{
            name: 'Пенал',
            description: 'Пенал шкільний',
            price: 100
        },{
            name: 'Лінійка',
            description: 'Лінійка 20 см, залізна',
            price: 42
        },{
            name: 'Портфейль',
            description: 'Портфель дитячий, Мікі Маус',
            price: 560
        },
    ],
    counter: 0
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state
        }
    }

}

export default mainReducer;