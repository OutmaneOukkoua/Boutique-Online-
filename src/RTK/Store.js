import { configureStore } from '@reduxjs/toolkit'
import ProductsSlice from './slices/ProductsSlice'
import CartSlice from './slices/CartSlice'

export const store = configureStore({
  reducer: {
    products : ProductsSlice,
    carts : CartSlice
  }
})

