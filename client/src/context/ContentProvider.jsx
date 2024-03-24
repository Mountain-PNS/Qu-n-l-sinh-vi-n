import React, { createContext, useReducer, useState } from "react";

export const CreateContext = createContext()
const initialState = {
  value: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "GET":
      return {
        value : action.payload
      }
    case "ADD":
      return {
        value : [...state.value, action.payload]
      }
    case "DELETE":
      return {
        value : state.value.filter((item)=> item._id !== action.payload)
      }
    case "UPDATE":
      return {
        value : state.value.map((item)=> item._id === action.payload._id ? action.payload : item)
      } 
     case "SEARCH":
      return  {
        value : state.value.filter((item)=> item.name.toLowerCase().includes(action.payload.toLowerCase()))
      }
    default:
      return state;
  }
};
const ContentProvider = ({children}) => {
    const [content, dispatch] = useReducer(reducer, initialState);
    const [hidden, setHidden] = useState(false);

  return <CreateContext.Provider value={{content,dispatch,hidden,setHidden}}>
    {children}
  </CreateContext.Provider>;

}

export default ContentProvider


