import { createAsyncThunk } from "@reduxjs/toolkit";

export const validateSignIn = createAsyncThunk(
    'auth/validateSignIn',
    async ({ email, password, setJWT, setUserData }, { dispatch }) => {
        try {
            const reqObject={
                email,
                password,
            };
            const body=JSON.stringify(reqObject);
            const response = await fetch('https://doubts-redresser.herokuapp.com/api/signin',{
                method: "post",
                headers: { "Content-Type": "application/json" },
                body,
            }).then(res=>res.json());
            const { token } = response;
            dispatch(setJWT(token));
            dispatch(setUserData(token));
            return 'success';
        } catch (error) {
            return "error";
        }
    }
);
export const validateSignUp = createAsyncThunk(
    'auth/validateSignUp',
    async ({ name, email, password, role, setJWT, setUserData }, {dispatch}) => {
        try {
            const reqObject={
                name,
                email,
                password,
                role,
            };
            const body=JSON.stringify(reqObject);
            const response = await fetch('https://doubts-redresser.herokuapp.com/api/signup',{
                method: "post",
                headers: { "Content-Type": "application/json" },
                body,
            }).then(res=>res.json());
            const { token } = response;
            dispatch(setJWT(token));
            dispatch(setUserData(token));
            return "success"
        } catch (e) {
            return "error";
        }
    }
);