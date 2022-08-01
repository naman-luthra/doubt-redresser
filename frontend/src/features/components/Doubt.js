import { AddComment } from "./AddComment";
import { Comment } from "./Comment";
export const Doubt = ({ title, description, author, dateAndTime, resolved, answer, comments, _id, AddCommentVisible  })=>{
    return(
        <div className="bg-gray-medium border-2 border-gray-dark divide-gray-dark divide-y-2 mb-16">
            <div className="p-2">
                <div className="flex flex-row-reverse text-xl mb-2">
                    {
                        resolved &&
                        <div className="self-center text-sm p-1 px-6 bg-green-light border-2 border-green">Resolved</div>
                    }
                    <span className="grow self-center">{title}</span>
                </div>
                <div className="text-sm my-1">{description}</div>
                <div className="text-right text-xs my-5">
                    <span className="mx-1">Asked By:</span>
                    <span>{author.name} on {dateAndTime}</span>
                </div>
                {
                    resolved &&
                    <div className="">
                        <div className="text-sm">
                            <span className="font-bold mr-1">Answer:</span>
                            <span>{answer.answerBody}</span>
                        </div>
                        <div className="text-xs my-3">
                            <span>Answered by {answer.author.name} on {answer.dateAndTime} </span>
                        </div>
                    </div>
                }
            </div>
            <div className="p-2 text-sm">
                <div>{comments.length} {comments.length===1 ? "Comment" : "Comments"}</div>
                {comments.map((comment,ind)=><Comment key={ind} {...comment} />)}
                {
                    AddCommentVisible &&
                    <AddComment _id={_id} />
                }
            </div>
        </div>
    );
}