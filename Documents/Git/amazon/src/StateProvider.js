import React,{createContext, useContext, useReducer}  from "react";

//prepare data Layer
export const StateContext= createContext();


//wrap our app and provide the data Layer
export const StateProvider = ({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//pull information from our datalayer
export const useStateValue=()=> useContext(StateContext);