import React , {useReducer, createContext} from 'react';

import contextReducer from './contextReducer';

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) => {
    const [transactions ,dispatch] = useReducer(contextReducer,initialState);

    //Action creators
    const deleteTransaction = (id) => dispatch({type:'DELETE_TRANSACTION',payload:id});
    const addTransaction = (transactions) => dispatch({type: 'ADD_TRANSACTION',payload:transactions});
    
    
  return(
    <ExpenseTrackerContext.Provider value={{
      deleteTransaction,
      addTransaction,
      transactions

    }}>{children}
    </ExpenseTrackerContext.Provider>
  )
}