const express = require('express');
const router = express.Router();
const User = require("../models/user");
const Post = require("../models/post");

//@type    POST
//$route   /profile/getProfile
//$desc    router for getting Developer's profile.
//@access  private
router.post("/getProfile", (req, res) => {
  id = req.body.id;
  User.findById(id)
    .then(result => {
      res.json({
        data: result
      });
    })
    .catch(err => {
      console.log(err);
      res.json({
        success: false,
        msg: "Something went wrong"
      });
    })
})

//@type    POST
//$route   /profile/getownPosts
//$desc    router for getting Developer's posts.
//@access  private
router.post("/getownPosts", (req, res) => {
  var id = req.body.id;

  Post.find({authorId:id})
    .then(result => {
      console.log(result)
      res.json({
        data: result
      });
    })
    .catch(err => {
      console.log(err);
      res.json({
        success: false,
        msg: "Something went wrong"
      });
    })

})






module.exports = router;