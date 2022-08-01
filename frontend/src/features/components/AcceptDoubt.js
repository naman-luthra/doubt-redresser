import { Link } from "react-router-dom";
export const AcceptDoubt = ({ title, _id  })=>{
    return(
        <div className="bg-gray-medium border-2 border-gray-dark divide-gray-dark divide-y-2 mb-4 p-2">
            <div className="flex flex-row text-lg">
                <span className="grow self-center">{title}</span>
                <Link to={`/solve-doubt/${_id}`} className="bg-white self-center text-xs border-2 hover:opacity-70 disabled:opacity-60 font-semibold rounded-sm border-blue text-blue p-1 px-4 ml-4">Accept</Link>
            </div>
        </div>
    );
}