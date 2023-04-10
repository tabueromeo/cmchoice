const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Category = new Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'name is required']
    },
    imagePath: String,
    description: String,
    subcategories: [{type: mongoose.Types.ObjectId, ref: "SubCategories"}]
},
{ 
    timestamps: true 
});

module.exports = mongoose.model('Categories', Category);
