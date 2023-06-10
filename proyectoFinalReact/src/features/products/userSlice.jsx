import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { authService } from "./userService";
import { toast } from "react-toastify";

export const registerUser = createAsyncThunk
("auth/register", async(userData, thunkAPI) => {
    try {
        return await authService.register(userData)
    }catch(error) {
        return thunkAPI.rejectWithValue(error)
    }
})


const getCustomerFromLocalStorage = localStorage.getItem("customer") 
  ? JSON.parse(localStorage.getItem("customer")) : null;

export const loginUser = createAsyncThunk
("auth/login", async(userData, thunkAPI) => {
    try {
        return await authService.login(userData)
    }catch(error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const getUserProductWishList= createAsyncThunk ("user/whislist", async(thunkAPI) => {
    try {
        return await authService.getUserProductWishList
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})


const initialState = {
    user: getCustomerFromLocalStorage,
    isError:false,
    isSucces:false,
    isLoading: false,
    message:"",
}

export const authSlice = createSlice({
    name: 'auth',
    initialState:initialState,
    reducers: {},
    extraReducers:(constructor) => {
        constructor.addCase(registerUser.pending,(state) => {
            state.isLoading=true
        }).addCase(registerUser.fulfilled,(state,action) => {
            state.isLoading=false;
            state.isError=false;
            state.isSucces=true;
            state.createdUser = action.payload;
            if(state.isSucces ===true) {
                toast.info("Usuario Creado")
            }
            
        }).addCase(registerUser.rejected,(state,action)=> {
            state.isLoading = false;
            state.isError=true;
            state.isSucces=false;
            state.message=action.error
            if(state.isError===true) {
                toast.error("Usuario no creado")
            }
        })
        .addCase(loginUser.pending,(state) => {
            state.isLoading=true
        }).addCase(loginUser.fulfilled,(state,action) => {
            state.isLoading=false;
            state.isError=false;
            state.isSucces=true;
            state.user = action.payload;
            if(state.isSucces ===true) {
                localStorage.setItem("token", action.payload.token)

                toast.info("Usuario logueado correctamente")
            }
            
        }).addCase(loginUser.rejected,(state,action)=> {
            state.isLoading = false;
            state.isError=true;
            state.isSucces=false;
            state.message=action.error
            if(state.isError===true) {
                toast.error("Usuario no creado")
            }
        })
        .addCase(getUserProductWishList.pending,(state) => {
            state.isLoading=true;
        
        }).addCase(getUserProductWishList.fulfilled, (state,action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSucces = true;
            state.wishlist = action.payload
        }).addCase(getUserProductWishList.rejected,(state,action) => {
            state.isLoading = false
            state.isError = true
            state.isSucces = false;
            state.message=action.error;
        })
    }
})

export default authSlice.reducer;

