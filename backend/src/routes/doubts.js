import { getConnectionToDB } from "../db";
export const doubts = {
    path: '/api/doubts',
    method: 'get',
    handler: async (req,res)=>{
        try {
            const db = getConnectionToDB('auth-db');
            const doubts = await db.collection('doubts').find().toArray();
            res.status(200).json(doubts);
        } catch (e) {
            console.log(e);
            res.status(500).send("Oops Something Went Wrong!")
        }
    }
}