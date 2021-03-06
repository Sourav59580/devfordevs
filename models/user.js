const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require("../config/database");

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    companyORinstitute: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dp: {
        type: String,
        default: "https://captaincoaster.com/images/default_user.png"
    },
    githubLink: {
        type: String
    },
    linkedinLink: {
        type: String
    },
    googleLink: {
        type: String
    },
    facebookLink: {
        type: String
    },
    instagramLink: {
        type: String
    },
    following: [{
        type: String
    }],
    followers: [{
        type: String
    }]
})


const User = module.exports = mongoose.model('User', UserSchema);


// findById
module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
}

// findByEmail
module.exports.getUserByEmail = function (email, callback) {
    const query = {
        email: email
    };
    User.findOne(query, callback);
}

// addUser
module.exports.addUser = function (newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback)
        })
    })
}

// comparePassword
module.exports.comparePassword = function (password, hash, callback) {
    bcrypt.compare(password, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    })
}