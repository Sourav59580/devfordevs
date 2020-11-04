const express = require('express');
const router = express.Router()
const config = require("../config/database");
const User = require("../models/user");


//@type    POST
//$route   /developers/follow
//$desc    router for adding new question.
//@access  private
router.post("/follow",(req,res)=>{
    const followingId = req.body.followingId;
    const ownId = req.body.ownId;


    // User.findByIdAndUpdate(ownId,{
    //     $pull: {
    //         following: followingId
    //     }
    // }, {
    //     upsert: true
    // })
    // .then((user) => {
    //     User.findByIdAndUpdate(followingId,{
    //         $pull: {
    //             followers: ownId
    //         }
    //     }, {
    //         upsert: true
    //     })
    //     .then((user) => {
    //         console.log(user);
    //         res.json({
    //             success: true,
    //             msg: 'Success.'
    //         });

    //     })
    //     .catch((err) => {
    //         console.log(err);
    //         res.json({
    //             success: false,
    //             msg: 'Something went wrong.'
    //         });
    //     })

    // })
    // .catch((err) => {
    //     console.log(err);
    //     res.json({
    //         success: false,
    //         msg: 'Something went wrong.'
    //     });
    // })
})









module.exports = router;