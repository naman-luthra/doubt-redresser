import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { doubtsData, setStatus, status } from "../doubts/doubtsSlice";
import { Doubt } from "../components/Doubt";
import { useEffect, useState } from "react";
import { addAnswer } from "../doubts/doubtsThunks";
import { NavBar } from "../components/NavBar";

export const SolveDoubt = ()=>{
    const { doubtId:_id } = useParams();
    const doubtsArray = useSelector(doubtsData);
    const doubt = doubtsArray.find(doubt=>doubt._id===_id);
    const [answerBody,setAnswerBody] = useState("");
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setStatus("idle"));
        document.title="Solve Doubt";
    },[]);
    const statusState = useSelector(status);

    return (
        <>
            <NavBar />
            <div className="mx-8 sm:mx-12 md:mx-16 lg:mx-20 xl:mx-24">
                <div className="text-3xl my-6">Home</div>
                <div className="grid grid-cols-2 gap-4">
                    <Doubt {...doubt} addCommentVisible={false} />
                    <div>
                        <div className="bg-gray border-2 border-gray-dark p-2 pt-4">
                            { 
                                statusState==="success" &&
                                <div className="text-green-600">Answer Added successfully!</div>
                            }
                            <div className="">
                                <span className="text-sm font-medium">Answer</span>
                                <input value={answerBody} onChange={(e)=>setAnswerBody(e.target.value)} type="text" placeholder="Answer" className="w-full p-1 px-2 border-gray-dark border-2 rounded-sm focus:border focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue"/>
                            </div>
                            <div className="text-right my-2">
                                <button onClick={()=>{
                                    console.log()
                                    dispatch(addAnswer({answerBody,_id}));
                                    setAnswerBody("");
                                    }} className="rounded text-white bg-blue text-base p-1 px-8 hover:opacity-70">Answer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}