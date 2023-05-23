const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Product = new Schema(
	{
		name: {
			type: String,
			require: true,
		},
		description: {
			type: String,
			require: true,
		},
		price: {
			type: Number,
			require: true,
		},
		imagesPath: [
			{
				type: String,
				require: true,
			},
		],
		tags: [
			{
				type: String,
			},
		],
		status: {
			type: String,
			required: [true, "status is required"],
			enum: {
				values: ["validated", "pending", "refused", "deleted"],
				message: "unknow status",
			},
		},
		sellerId: { type: mongoose.Types.ObjectId, ref: "User", require: true },
		subCategory: { type: mongoose.Types.ObjectId, ref: "SubCategory" },
	},
	{
		timestamps: true,
	}
);
module.exports = mongoose.model("Products", Product);
