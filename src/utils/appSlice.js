import { createSlice } from "@reduxjs/toolkit";

const appSLice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;

        }
    }

})

export const{toggleMenu}=appSLice.actions;
export default appSLice.reducer;