const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    shoopingCart: {type: mongoose.Types.ObjectId, ref: "ShoppingCarts"},
    favorites: {type: mongoose.Types.ObjectId, ref: "Favorites"},
    sellerProducts: [{
        _id: false,
        product: {type: mongoose.Types.ObjectId, ref: "Products"
    }}]
},
{ 
    timestamps: true
});
module.exports = mongoose.model('users', User);