import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadDoubts = createAsyncThunk(
    'doubts/loadDoubts',
    async () => {
        try {
            const response = await fetch('https://doubts-redresser.herokuapp.com/api/doubts').then(res=>res.json());
            return {error:false, response};
        } catch (error) {
            return {error:true};
        }
    }
);

export const addDoubt = createAsyncThunk(
    'doubts/addDoubt',
    async ({ title, description }, { getState }) => {
        try {
            const { auth } = getState();
            const dateAndTime = new Date().toLocaleString('en-GB', {
                dateStyle:'long',
                timeStyle:'short',
                timeZone: 'IST',
            });
            const doubt={
                title,
                description,
                author: {
                    name: auth.userDetails.userInfo.name,
                    _id: auth.userDetails.userIndex
                },
                dateAndTime,
                comments: [],
                resolved: false,
                answer: {}
            };
            const body=JSON.stringify(doubt);
            const response = await fetch('https://doubts-redresser.herokuapp.com/api/add-doubt',{
                method: "post",
                headers: { "Content-Type": "application/json" },
                body,
            }).then(res=>res.json());
            const { insertedId } = response;
            doubt._id = insertedId;
            return {error:false, doubt};
        } catch (error) {
            return {error:true};
        }
    }
)

export const addComment = createAsyncThunk(
    'doubts/addComment',
    async ({ _id, commentBody }, { getState }) => {
        try {
            const { auth } = getState();
            const comment={
                commentBody,
                author: {
                    name: auth.userDetails.userInfo.name,
                    _id: auth.userDetails.userIndex
                },
            };
            const body=JSON.stringify(comment);
            const response = await fetch(`https://doubts-redresser.herokuapp.com/api/add-comment/${_id}`,{
                method: "put",
                headers: { "Content-Type": "application/json" },
                body,
            }).then(res=>res.json());
            return {error:false,comment,_id};
        } catch (error) {
            return {error:true};
        }
    }
)

export const addAnswer = createAsyncThunk(
    'doubts/addAnswer',
    async ({ _id, answerBody }, { getState }) => {
        try {
            const { auth } = getState();
            console.log(auth);
            const dateAndTime = new Date().toLocaleString('en-GB', {
                dateStyle:'long',
                timeStyle:'short',
                timeZone: 'IST',
            });
            const answer={
                answerBody,
                author: {
                    name: auth.userDetails.userInfo.name,
                    _id: auth.userDetails.userIndex
                },
                dateAndTime,
            };
            console.log(answer);
            const body=JSON.stringify(answer);
            const response = await fetch(`https://doubts-redresser.herokuapp.com/api/add-answer/${_id}`,{
                method: "put",
                headers: { "Content-Type": "application/json" },
                body,
            }).then(res=>res.json());
            return {error:false,answer,_id};
        } catch (error) {
            return {error:true};
        }
    }
)