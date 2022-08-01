import { useDispatch, useSelector } from "react-redux"
import { userDetails } from "../auth/authSlice";
import { Link } from "react-router-dom";
import { logOut } from "../auth/authSlice";
import { useNavigate } from "react-router-dom";

export const NavBar = ()=>{
    const userDetailsState = useSelector(userDetails);
    const dispatch = useDispatch();
    return (
        <div className="fixed w-full top-0 z-40">
            <div className="flex flex-row w-full px-6 py-3 bg-gray">
                <div className="self-center w-10 h-10 rounded-sm bg-gray-light"></div>
                <div className="self-center grow font-medium">
                    <Link to="/" className="hover:opacity-70 ml-6 mx-1">Home</Link>
                    <span>|</span>
                    <Link to="/ask-doubt" className="hover:opacity-70 mx-1">Raise Doubt</Link>
                    {
                        userDetailsState.userInfo.type==="ta" && 
                        <>
                            <span>|</span>
                            <Link to="/solve-doubts" className="hover:opacity-70 mx-1">Solve Doubts</Link>
                        </>}
                </div>
                <button onClick={()=>{
                    dispatch(logOut());
                    dispatch('/');
                    }} className="self-center rounded text-white font-medium bg-blue text-base p-1 px-5 hover:opacity-70">Logout</button>
            </div>
        </div>
    );
}