const express = require("express");
const router = express.Router();
const Post = require("../model/userPost");

router.post('/post',(req,res)=>{
    const newPost = new Post({
        authorId: req.body.authorId,
        name: req.body.name,
        picture: req.body.picture,
        video: req.body.video,
        content: req.body.content,
        tags: req.body.tags
    })

    newPost.save()
   .then( post =>{
      console.log(post);
   })
   .catch( err => {
      console.log(err);
   })
})

router.post("/like",(req,res)=>{
   const newLike = {
       liked_by: req.body.liked_by,
       reactions: req.body.reactions
   }

   const postId = req.body.postId;

   Post.findByIdAndUpdate(postId,
    {$push: { likes: newLike }},
    { upsert: true })
    .then((user)=>{
        console.log(user);
        res.json({success:true});
    
    })
    .catch((err)=>{
        console.log(err);
    })
})

router.post("/comment",(req,res)=>{
    
    const newComment = {
        author_id: req.body.author_id,
        auther_name: req.body.auther_name,
        comment: req.body.comment
    }

    const postId = req.body.postId;
    
    Post.findByIdAndUpdate(postId,
        {$push: { comments: newComment }},
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