const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt');

let User = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        sparse: true
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    phoneNumber: {
        type: Number,
        required: [true, 'phone number is required'],
        unique: true,
        index: true
    },
    town: {
        type: String
    },
    state: {
        type: String
    },
    quarter: {
        type: String
    },
    country: {
        type: String
    },
    role: {
        type: String,
        required: [true, 'role is required'],
        enum: {values: ['customer','seller','moderator','admin'], message: 'unknow role'}
    },
    fieldOfActivity: {
        type: String
    },
    shoopingCart: {type: mongoose.Types.ObjectId, ref: "ShoopingCart"},
    favorites: {type: mongoose.Types.ObjectId, ref: "Favorite"},
    sellerProducts: [{type: mongoose.Types.ObjectId, ref: "Product"}]
},
{ 
    timestamps: true 
});
module.exports = mongoose.model('users', User);