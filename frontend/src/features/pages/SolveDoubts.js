import { useEffect } from "react";
import { useSelector } from "react-redux";
import { AcceptDoubt } from "../components/AcceptDoubt";
import { NavBar } from "../components/NavBar";
import { doubtsData } from "../doubts/doubtsSlice";

export const SolveDoubts = ()=>{
    const doubtsArray = useSelector(doubtsData);
    const unsolvedDoubtsArray = doubtsArray.filter(doubt=>!doubt.resolved);
    useEffect(()=>{
        document.title="Solve Doubts";
    })
    return (
        <>
            <NavBar />
            <div className="mx-8 sm:mx-12 md:mx-16 lg:mx-20 xl:mx-24">
                <div className="text-3xl my-6">Solve Doubts</div>
                {unsolvedDoubtsArray.map(doubt=><AcceptDoubt key={doubt._id} {...doubt} />)}
            </div>
        </>
    );
}