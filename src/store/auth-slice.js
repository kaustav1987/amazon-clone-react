import { createSlice } from "@reduxjs/toolkit";

const getExpiryTime =(expiresIn)=>{
    const expiryTime = new Date((new Date().getTime() +(+expiresIn*1000) ))
    return expiryTime;
}
const authSlice = createSlice({
    name: 'auth',
    initialState :{
        //We dont have backend yet...Will change this later
        isAuthenticated : localStorage.getItem("idToken") && localStorage.getItem("email") && localStorage.getItem("expiry"),
        idToken: localStorage.getItem("idToken"),
        expiresIn:localStorage.getItem("expiry"),
        email:localStorage.getItem("email")
    },
    reducers : {
        login(state,action){
            console.log("authentiated");
            state.isAuthenticated= true;
            state.idToken= action.payload.idToken;
            const expiryTime= getExpiryTime(action.payload.expiresIn);
            state.expiresIn = expiryTime;
            state.email=action.payload.email;
            localStorage.setItem("idToken", action.payload.idToken);
            localStorage.setItem("email", action.payload.email);
            localStorage.setItem("expiry", expiryTime);
        },
        logoff(state){
            state.isAuthenticated= false;
            state.idToken= null;
            state.expiresIn = null;
            localStorage.removeItem("idToken")
            localStorage.removeItem("email")
            localStorage.removeItem("expiry")
        },
    }
})

export const authActions = authSlice.actions;

export default authSlice;