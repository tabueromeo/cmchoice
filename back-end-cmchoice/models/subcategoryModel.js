const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let SubCategory = new Schema(
	{
		name: {
			type: String,
			unique: true,
			required: [true, "name is required"],
		},
		imagePath: String,
		description: String,
		categoryId: {
			type: mongoose.Types.ObjectId,
			ref: "Categories",
			required: [true, "Category is required"],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("SubCategories", SubCategory);
