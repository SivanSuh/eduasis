import FlashCardModels from "@/models/FlashCardModels";
import PostModels from "@/models/PostModels";
import postService from "@/service/postService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState:FlashCardModels = {
    content:[],
    known:[],
    error:null,
    translateValue:null
}

export const postApi = createAsyncThunk("post", async (data:PostModels) => {
    try {
        const response = await postService.postTranslate(data);
        console.log("res",response)
        return response
    } catch (error) {
        console.log(error)
    }
})

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
    },
    extraReducers:(builder) => {
        builder.addCase(postApi.fulfilled,(state,action) => {
            //state.content.push(action.payload?.data?.data)
            state.translateValue = action.payload?.data?.data?.translations
        })
        builder.addCase(postApi.rejected,(state,action) => {
            state.error = action.payload
        })
    }
})
export const { addCard, addKnowCard } = flashCardSlice.actions
export default flashCardSlice.reducer