export const Comment = ({ author, commentBody })=>{
    return(
        <div className="w-full p-2 mt-1 mb-2 bg-gray border-2 border-gray-dark">
            {author.name}: {commentBody}
        </div>
    );
}