const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ShoppingCart = new Schema ({
    userId: {type: mongoose.Types.ObjectId, ref: "users", required: [true, 'user id is required']},
    products: [{
        _id: false,
        item: {type: mongoose.Types.ObjectId, ref: "Products"},
        quantity: Number,
    }],
    commands: [{
        _id: false,
        command: {type: mongoose.Types.ObjectId, ref: "Commands"}
    }],
},
{ 
    timestamps: true 
});
module.exports = mongoose.model('ShoppingCarts', ShoppingCart);
