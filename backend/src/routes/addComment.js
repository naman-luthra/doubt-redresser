import { ObjectId } from 'mongodb';
import { getConnectionToDB } from '../db';
export const AddComment = {
    path: '/api/add-comment/:doubtid',
    method: 'put',
    handler: async (req,res)=>{
        const { doubtid } = req.params;
        const { author, commentBody } = req.body;
        try {
            const db = getConnectionToDB('auth-db');
            db.collection("doubts").updateOne({ _id: ObjectId(doubtid) }, { "$push": { comments: { author, commentBody } } } , function(err, response) {
                if (err) throw err;
                res.status(200).json(response);
            });
        } catch (e) {
            console.log(e);
            res.status(500).send("Oops Something Went Wrong!")
        }
    }
}