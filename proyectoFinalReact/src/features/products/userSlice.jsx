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

export const loginUser = createAsyncThunk
("auth/login", async(userData, thunkAPI) => {
    try {
        return await authService.login(userData)
    }catch(error) {
        return thunkAPI.rejectWithValue(error)
    }
})


const initialState = {
    user: "",
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
    }
})

export default authSlice.reducer;

