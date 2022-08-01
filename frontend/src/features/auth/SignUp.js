import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from 'react-router-dom';
import { validateSignUp } from "./authThunks";
import { status, isAuthorised, setJWT, setUserData, setStatus } from "./authSlice";
import { useDispatch } from "react-redux";
import { IoMdArrowDropdown } from 'react-icons/io';

export const SignUp = ()=>{

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("");
    const [visible, setVisible] = useState("");

    const isAuthorisedState = useSelector(isAuthorised);
    const statusState = useSelector(status);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setStatus('idle'));
        document.title="Sign Up";
    },[]);

    if(isAuthorisedState) return <Navigate to='/' />

    return (
        <div className="flex justify-center h-screen bg-gray-light">
            <div className="inline-block self-center bg-white p-12 w-9/12 lg:w-1/2 xl:w-5/12 md:w-2/3 rounded-sm">
                <div className="text-center text-2xl font-sans ">Sign Up</div>
                <div className="text-center mt-2"><span className="text-sm">Already have an account? <Link to='/signin' className=" text-blue">Sign In</Link></span></div>
                {statusState==='error' && <div className="text-center mt-2 text-xs text-red-600">Oops Something Went Wrong!</div>}
                <input
                    className="my-1 mt-4 text-sm placeholder:text-black placeholder:font-normal w-full p-2 border border-slate-300 rounded-md"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Your Name" />
                <input
                    className="my-1 mt-2 text-sm placeholder:text-black placeholder:font-normal w-full p-2 border border-slate-300 rounded-md"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email Address" />
                <input
                    className="my-2 text-sm placeholder:text-black placeholder:font-normal w-full p-2 border border-slate-300 rounded-md"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password" />
                <input
                    className="my-1 text-sm placeholder:text-black placeholder:font-normal w-full p-2 border border-slate-300 rounded-md"
                    type="password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password" />
                <div
                    disabled
                    onClick={()=>{
                        setVisible(!visible);
                    }}
                    className="hover:opacity-70 flex mt-2 text-sm placeholder:text-black placeholder:font-normal w-full p-2 border border-slate-300 rounded-md">
                    <span className="self-center grow">{role==="student" ? "Student" : role==="ta" ? "Teaching Assistant" : "Select Role"}</span>
                    <IoMdArrowDropdown className="self-center" />
                </div>
                {
                    visible &&
                    <div className="flex flex-col my-2">
                        <button onClick={()=>{
                            setRole("student");
                            setVisible(false);
                        }} className={`hover:opacity-70 p-1 mx-5 ${role==="student" ? "border-blue" : "border-gray-dark"} border my-1`}>Student</button>
                        <button onClick={()=>{
                            setRole("ta");
                            setVisible(false);
                        }} className={`hover:opacity-70 p-1 mx-5 ${role==="ta" ? "border-blue" : "border-gray-dark"} border my-1`}>Teaching Assistant</button>
                    </div>
                }
                <button
                    className={`w-full text-center rounded-2xl ${email==="" || password==="" || name==="" || role==="" || password!==confirmPassword ? "bg-green-light" : "bg-green"} text-white p-1 mt-6`}
                    disabled={email==="" || password==="" || name==="" || role==="" || password!==confirmPassword}
                    onClick={()=>dispatch(validateSignUp({email,password,name,role,setJWT,setUserData}))}>Sign Up</button>
            </div>
        </div>
    );
}