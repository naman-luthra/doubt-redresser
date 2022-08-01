import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../doubts/doubtsThunks";

export const AddComment = ({_id})=>{
    const [commentBody,setCommentBody] = useState("");
    const dispatch = useDispatch();
    return(
        <div className="flex my-4">
            <input type="text" value={commentBody} onChange={(e)=>setCommentBody(e.target.value)} placeholder="Add Comment" className="grow p-1 px-2 bg-white  border-gray-dark border-2 rounded-sm focus:border focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue"/>
            <button disabled={commentBody==""} onClick={()=>{
                dispatch(addComment({_id,commentBody}));
                setCommentBody("");
                }} className="bg-white border-2 hover:opacity-70 disabled:opacity-60 font-semibold rounded-sm border-blue text-blue p-1 px-4 ml-4">Comment</button>
        </div>
    );
}