const { response } = require('express');
const mongodb = require('../data/database');
const objectId = require('mongodb').ObjectId;

const getAllFriends = async (req, res) => {
  const result = await mongodb.getDatabase().db().collection('friends').find();
  result.toArray().then((friends) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(friends);
  });
};

const getAfriend = async (req, res) => {
  const friendId = new objectId(req.params.id);
  const result = await mongodb.getDatabase().db().collection('friends').find({ _id: friendId });
  result.toArray().then((friend) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(friend[0]);
  });
};


const createFriend =async (req, res)=>{
 let friend ={
   name:req.body.name,
  nickname: req.body.nickname,
  age: req.body.age,
  status: req.body.status,
  mood:req.body.mood,
  skills: req.body.skills,
  favoritePhrase:  req.body.skills,
  lastIncident:req.body.lastIncident,
  pet:req.body.pet
 }
 const postFrient =await mongodb.getDatabase().db().collection('friends').insertOne(friend);
 if(postFrient.acknowledged>0){
  res.status(200).send();
 }else{
  res.status(500).json(postFrient.error) || 'Some error occurred while creating the user.'
 }
}

const updateFriend =async (req, res)=>{
  const friendId  =new objectId(req.params.id);
  const friend= {
    name: req.body.name,
    nickname: req.body.nickname,
    age: req.body.age,
    status: req.body.status,
    mood: req.body.mood,
    skills:  req.body.skills,
    favoritePhrase: req.body.favoritePhrase,
    lastIncident:req.body.lastIncident,
    pet:  req.body.pet
  }
  const updateFriend=  await mongodb.getDatabase().db().collection('friends').replaceOne({_id: friendId}, friend);
  if(updateFriend.modifiedCount>0){
    res.status(200).send(`${friend.name} have beenn sucessfully update`);

  }else{
    res.status(500).json(friend.error || ' error while updating the user.');

  }


}

const deleteFriend = async (req, res)=>{
  const friendId =new objectId(req.params.id);
  const deleteFriend = await mongodb.getDatabase().db().collection('friends').deleteOne({_id:friendId}, true);
  if(deleteFriend.deletedCount>0){
    res.status(200).send(`${friendId} have been successfullly deleted`);
}else{
  res.status(500).json({error: `Error occured while deleting the the friend with  ${friendId}`})
}

}

module.exports = {
  getAllFriends,
  getAfriend, updateFriend,
  deleteFriend,
  createFriend
};
