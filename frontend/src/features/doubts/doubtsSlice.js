import { createSlice } from '@reduxjs/toolkit';
import { addAnswer, addComment, addDoubt, loadDoubts } from './doubtsThunks';

const initialState = {
    doubtsData: [],
    status: 'idle'
};

export const doubtsSlice = createSlice({
    name: 'doubts',
    initialState,
    reducers: {
        setStatus: (state,action)=>{
            state.status = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadDoubts.pending, (state)=>{
                state.status = 'loading';
            })
            .addCase(loadDoubts.fulfilled, (state, action)=>{
                const {error,response} = action.payload;
                if(error) return state.status = 'error';
                state.status = 'success';
                state.doubtsData = response;
            })
            .addCase(addDoubt.fulfilled, (state, action)=>{
                const {error,doubt} = action.payload;
                state.status = 'success';
                if(error) return state.status = 'error';
                state.doubtsData.push(doubt);
            })
            .addCase(addComment.fulfilled, (state, action)=>{
                const {error,comment,_id} = action.payload;
                if(error) return state.status = 'error';
                state.status = 'success';
                state.doubtsData = state.doubtsData.map(doubt=>{
                    if(doubt._id===_id) doubt.comments.push(comment);
                    return doubt;
                })
            })
            .addCase(addAnswer.fulfilled, (state, action)=>{
                const {error,answer,_id} = action.payload;
                if(error) return state.status = 'error';
                state.status = 'success';
                state.doubtsData = state.doubtsData.map(doubt=>{
                    if(doubt._id===_id){
                        doubt.answer = answer;
                        doubt.resolved = true;
                    }
                    return doubt;
                })
            });
    },
});

export const status = state=>state.doubts.status;
export const doubtsData = state=>state.doubts.doubtsData;
export const { setStatus } = doubtsSlice.actions;

export default doubtsSlice.reducer;
