import FlashCardModels from "@/models/FlashCardModels";
import { createSlice } from "@reduxjs/toolkit";


const initialState:FlashCardModels = {
    content:[],
    known:[]
}

const flashCardSlice = createSlice({
    name:"flash-card",
    initialState,
    reducers:{
        addCard:(state,action) => {
            const word = action.payload;
            if(!state.content.includes(word)){
                state.content.push(word)
            }
        },
        addKnowCard:(state,action) => {
            const word = action.payload;
            if(!state.known.includes(word)){
                state.known.push(word)
            }
        }
    }
})
export const { addCard, addKnowCard } = flashCardSlice.actions
export default flashCardSlice.reducer