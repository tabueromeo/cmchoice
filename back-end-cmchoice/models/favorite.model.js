const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Favorite = new Schema ({
    userId: {type: mongoose.Types.ObjectId, ref: "User", required: [true, 'user id is required']},
    products: [
        {
            _id: false,
            product: {type: mongoose.Types.ObjectId, ref: "Products"}
        }
    ]
},
{ 
    timestamps: true 
});
module.exports = mongoose.model('Favorites', Favorite);
