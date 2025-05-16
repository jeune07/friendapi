const mongodb =require("../data/database");
const objectId =require('mongodb').ObjectId;

const getAllFriends =async (req, res)=>{
    const result =await mongodb.getDatabase().db().collection('friends').find();
    result.toArray().then(((friends)=>{
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(friends);
    }))

}

const getAfriend = async (req,res)=>{
    const friendId =new objectId(req.params.id)
    const result =await mongodb.getDatabase().db().collection('friends').find({_id:friendId});
    result.toArray().then((friend)=>{
        res.setHeader('Content-Type','application/json');
        res.status(200).json(friend[0]);
    })

}

module.exports={
    getAllFriends, getAfriend
}