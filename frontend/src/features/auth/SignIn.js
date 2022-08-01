import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from 'react-router-dom';
import { validateSignIn } from "./authThunks";
import { status, isAuthorised, setJWT, setUserData, setStatus } from "./authSlice";
import { useDispatch } from "react-redux";

export const SignIn = ()=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const isAuthorisedState = useSelector(isAuthorised);
    const statusState = useSelector(status);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setStatus('idle'));
        document.title="Sign In";
    },[]);

    if(isAuthorisedState) return <Navigate to='/' />;

    return (
        <div className="flex justify-center h-screen bg-gray-light">
            <div className="inline-block self-center bg-white p-12 w-9/12 lg:w-1/2 xl:w-5/12 md:w-2/3 rounded-sm">
                <div className="text-center text-2xl font-sans ">Sign In</div>
                <div className="text-center mt-2"><Link to='/signup' className="text-sm">Don't have an account? <span className="text-blue">Sign Up</span></Link></div>
                {statusState==='error' && <div className="text-center mt-2 text-xs text-red-600">Wrong email or password!</div>}
                <input
                    className="my-1 mt-4 text-sm placeholder:text-black placeholder:font-normal w-full p-2 border border-slate-300 rounded-md"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email Address" />
                <input
                    className="my-2 text-sm placeholder:text-black placeholder:font-normal w-full p-2 border border-slate-300 rounded-md"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password" />
                <div className="text-sm text-blue my-1">
                    <button onClick={async ()=>{alert("Sign in dummy!")}}>Forgot your password?</button>
                </div>
                <button
                    className={`w-full text-center rounded-2xl ${!email || !password ? "bg-green-light" : "bg-green"} text-white p-1 mt-6`}
                    disabled={!email || !password}
                    onClick={()=>{
                        dispatch(validateSignIn({email,password,setJWT,setUserData}));
                    }}>Sign In</button>
            </div>
        </div>
    );
}