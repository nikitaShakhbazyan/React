import {configureStore} from '@reduxjs/toolkit'
import productSlice from './categories/productSlice'
import cartSlice from './categories/cartSlice'

export const store = configureStore({
    reducer : {
        products : productSlice,
        cart : cartSlice,
    },
    devTools : true,
    
})