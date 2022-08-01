import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavBar } from "../components/NavBar";
import { setStatus, status } from "../doubts/doubtsSlice";
import { addDoubt } from "../doubts/doubtsThunks";
export const RaiseDoubt = ()=>{
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setStatus("idle"));
        document.title="Ask Doubt";
    },[]);
    const statusState = useSelector(status);
    return(
        <>
            <NavBar />
            <div className="mx-8 sm:mx-12 md:mx-16 lg:mx-20 xl:mx-24">
                {}
                <div className="text-3xl my-6">Raise Doubt</div>
                <div className="bg-gray border-2 border-gray-dark my-8 px-4 pt-10 pb-4">
                    { 
                        statusState==="success" &&
                        <div className="text-green-600">Doubt raised successfully!</div>
                    }
                    <div className="my-4">
                        <span className="text-sm font-medium">Title</span>
                        <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Title" className="w-full p-1 px-2 border-gray-dark border-2 rounded-sm focus:border focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue"/>
                    </div>
                    <div className="my-4">
                        <span className="text-sm font-medium">Description</span>
                        <input value={description} onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Description" className="w-full p-1 px-2 border-gray-dark border-2 rounded-sm focus:border focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue"/>
                    </div>
                    <div className="text-right my-6">
                        <button onClick={()=>{
                            dispatch(addDoubt({title,description}));
                            setDescription("");
                            setTitle("");
                            }} className="rounded text-white bg-blue text-base p-1 px-8 hover:opacity-70">Ask Doubt</button>
                    </div>
                </div>
            </div>
        </>
    );
}