import { getConnectionToDB } from "../db";
export const addDoubt = {
    path: '/api/add-doubt',
    method: 'post',
    handler: async (req,res)=>{
        const { 
            title,
            description,
            author,
            dateAndTime,
            comments,
            resolved,
            answer } = req.body;
        const doubt = {
            title,
            description,
            author,
            dateAndTime,
            comments,
            resolved,
            answer,
        }
        try {
            const db = getConnectionToDB('auth-db');
            db.collection("doubts").insertOne(doubt, function(err, response) {
                if (err) throw err;
                res.status(200).json(response);
            });
        } catch (e) {
            console.log(e);
            res.status(500).send("Oops Something Went Wrong!")
        }
    }
}