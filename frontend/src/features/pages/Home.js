import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Doubt } from "../components/Doubt";
import { NavBar } from "../components/NavBar";
import { doubtsData } from "../doubts/doubtsSlice";
import { loadDoubts } from "../doubts/doubtsThunks";
export const Home = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadDoubts());
        document.title="Home";
    },[]);
    const doubtsArray = useSelector(doubtsData);
    return (
        <>
            <NavBar />
            <div className="mx-8 sm:mx-12 md:mx-16 lg:mx-20 xl:mx-24">
                <div className="text-3xl my-6">Home</div>
                {doubtsArray.map(doubt=><Doubt key={doubt._id} AddCommentVisible={true} {...doubt} />)}
            </div>
        </>
    );
}