import React,{createContext,useContext,useReducer} from "react";

const CartContext=createContext();

const initialState={
    cartItems:[]
}

const cartReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_ITEM':
            
            return {cartItems:[...state.cartItems,action.payload]};
        case 'REMOVE_ITEM':
            return {cartItems:state.cartItems.filter(item=>item.id!=action.payload)};
        case 'CLEAR_CART':
            return {cartItems:[]}
        default:
            return state;
    }

};

export function CartProvider({children}){
    const [state,dispatch]=useReducer(cartReducer,initialState);

    return (
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart=()=>useContext(CartContext);