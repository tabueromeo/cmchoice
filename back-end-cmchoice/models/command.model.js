const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Command = new Schema({
    shoppingCart: {type: mongoose.Types.ObjectId, ref: "ShoppingCart", required: [true, 'shopping Cart is required']},
    totalPrice: {
        type: String,
        totalPrice: [true, 'total price is required']
    },
    status: {
        type: String,
        required: [true, 'role is required'],
        enum: {
            values: ['waiting for delivery','deliverey confirmed','cancelled','Undelivered','delivered'], 
            message: 'unknow status'
        }
    },
    deliveryDate: {type: Date},
    deliveryInfos:[{
        country: {type: String, required: true}, 
        state: {type: String, required: true}, 
        town: {type: String, required: true}, 
        quater: {type: String, required: true}, 
        customerPhoneNumber: {type: Number, required: true}
    }]
},
{ 
    timestamps: true 
});

module.exports = mongoose.model('Commands', Command);
