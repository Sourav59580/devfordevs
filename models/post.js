const mongoose = require('mongoose');
const config = require('../config/database');


const PostSchema = mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answers: [{
        name: {
            type: String,
        },
        answer: {
            type: String,
        }
    }]
})


const Post = module.exports = mongoose.model("Post",PostSchema);