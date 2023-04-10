const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ShoppingCart = new Schema ({
    userId: {type: mongoose.Types.ObjectId, ref: "User", required: [true, 'user id is required']},
    products: [{
        id: {type: mongoose.Types.ObjectId, ref: "Products"},
        quantity: Number,
    }],
    commands: [{type: mongoose.Types.ObjectId, ref: "Command"}],
},
{ 
    timestamps: true 
});
module.exports = mongoose.model('ShoppingCarts', ShoppingCart);
