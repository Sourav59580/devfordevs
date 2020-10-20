const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Please enter title']
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    enableNotification: {
        type: Boolean
    },
    privacy: {
        type: String
    },
    tags: {
        type: Array
    },
    coverImage: {
        type: String
    },
    media: {
        type: Array
    },
    address: {
        type: String
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

}, {
    timestamps: true,
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});

PostSchema.virtual('likeCount', {
    ref: 'Like',
    localField: '_id',
    foreignField: 'postId',
    count: true
});

PostSchema.virtual('likes', {
    ref: 'Like',
    localField: '_id',
    foreignField: 'postId',
});

PostSchema.virtual('comments', {
    ref: 'Comment',
    localField: '_id',
    foreignField: 'postId',
});

PostSchema.virtual('shares', {
    ref: 'Share',
    localField: '_id',
    foreignField: 'postId',
});

PostSchema.index({
    title: 'text',
    description: 'text',
    address: 'text'
});

//Export the model
module.exports = mongoose.model('Post', PostSchema);




















































// const mongoose = require('mongoose');
// const config = require('../config/database');


// const questionSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     question: {
//         type: String,
//         required: true
//     },
//     total_views: {
//         type: Number
//     },
//     tags: {type: Array},
//     likes:[{liked_by: user_id}]
// })