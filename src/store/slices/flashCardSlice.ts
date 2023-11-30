import FlashCardModels from "@/models/FlashCardModels";
import { createSlice } from "@reduxjs/toolkit";

const initialState:FlashCardModels ={
    content:[]
}

const flashCardSlice = createSlice({
    name:"flash-card",
    initialState,
    reducers:{
        addCard:(state,action) => {
            state.content.push(action.payload)
        }
    }
})
export const { addCard } = flashCardSlice.actions
export default flashCardSlice.reducer