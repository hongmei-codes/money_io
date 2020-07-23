// specify how state changes in reaction to user actions
// reducer is used to change state and pass it down to components

export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {...state, transactions: state.transactions.filter(t => t.id !== action.payload)}
        case 'ADD_TRANSACTION':
            return {...state, transactions: [action.payload, ...state.transactions]}
        default:
            return state;
    }
}

// AppReducer.js state ->
// GlobalState.js userReducer -> have access to state values from initial state ->
// GlobalContext.Provider which has a value prop ->
// App.js get values and use in balance, income/expense...