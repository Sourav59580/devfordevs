const express = require("express");
const router = express.Router();
const Post = require('../model/post')


router.post("/postQuestion",(req,res)=>{
   
   const newPost = new Post({
      question: req.body.question
   })

   newPost.save()
   .then( post =>{
      console.log(post);
   })
   .catch( err => {
      console.log(err);
   })
})

router.post("/postAnswer",(req,res)=>{
   
   const newAnswer = {
      name: req.body.name,
      answer: req.body.answer
   }

   const question = req.body.question;

   Post.findOneAndUpdate({question: question},
      { $push: { answers: newAnswer } },
      { upsert: true })
      .then((user)=>{
         console.log(user);
         res.json({success:true});
     
     })
     .catch((err)=>{
         console.log(err);
     })

})









module.exports = router;