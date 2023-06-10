import {configureStore} from "@reduxjs/toolkit"
import authReducer from '../features/products/userSlice'
import productReducer from '../features/products/productSlice'

export const store= configureStore({
    reducer:{
        auth:authReducer,
        product: productReducer
    }
})