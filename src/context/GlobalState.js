import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    // global state live here
    transactions: []
}

// create global context
export const GlobalContext = createContext(initialState);

// for other scripts to access to global state
// need to create a provider
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // action which calls reducer
    function deleteTransaction(id) {
        dispatch({type: 'DELETE_TRANSACTION', payload: id});
    }

    // action which calls reducer
    function addTransaction(transaction) {
        dispatch({type: 'ADD_TRANSACTION', payload: transaction});
    }

    return (
        <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
            { children }
        </GlobalContext.Provider>
    )
}