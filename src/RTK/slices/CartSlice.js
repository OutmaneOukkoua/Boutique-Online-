import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    initialState : [],
    name : 'CartSlice',
    reducers : {
        AddToCart : (state,action) => {
            const FindProduct = state.find((product)=>product.id === action.payload.id);
            if(FindProduct) {
                FindProduct.quantity += 1;
            }else{
                const productClone = {...action.payload,quantity:1}
                state.push(productClone);
            }
            
        },
        RemoveFromCart : (state,action) => {
            return state.filter((product)=> product.id !== action.payload.id)
        },
        Clear : (state,action) => {return []},
    },
})


export const {AddToCart,RemoveFromCart,Clear} = CartSlice.actions;
export default CartSlice.reducer;