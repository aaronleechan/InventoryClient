import React, { createContext, useReducer,useEffect, useState } from 'react'
import {reducer,completeData} from './reducer'
import useAsyncReducer from './asyncReducer'

const initialState = {data:[]}

export const Store = createContext(initialState)

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useAsyncReducer(reducer, initialState)
  
  return (
    <Store.Provider value={{state, dispatch}}>
      {children}
    </Store.Provider>
  )
}