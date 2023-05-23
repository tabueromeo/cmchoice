let FavoriteModel = require("../models/favoriteModel");
let UserModel = require("../models/userModel");

let FavoriteController = {
	createFavoriteList: async (req, res) => {
		const { currentUserId } = req.user;
		if (currentUserId) {
			const user = await UserModel.findById(currentUserId);
			if (user) {
				try {
					let newList = new FavoriteModel({
						userId: currentUserId,
						...req.body,
					});
					console.log("ok");
					const listCreated = await newList.save();
					await UserModel.findByIdAndUpdate(
						currentUserId,
						{ favorites: listCreated._id },
						{ new: true }
					);
					res.status(200).json(listCreated);
				} catch (error) {
					res.status(500).json(error);
				}
			} else {
				res
					.status(404)
					.send("User doesnt exist, you cant create this shopping cart");
			}
		} else {
			res.status(403).send("Acces Denied! You cant do this");
		}
	},
	all: async (req, res) => {
		const { currentUserRole } = req.user;
		if (currentUserRole === "admin") {
			FavoriteModel.find()
				.populate("products")
				.then((data) => {
					res.json(data);
				})
				.catch((error) => console.log(error));
		} else {
			res.status(403).send("Acces Denied! You cant do this");
		}
	},
	getFavoriteList: async (req, res) => {
		try {
			const { currentUserId, currentUserRole } = req.user;
			let listFind = await FavoriteModel.findById(req.params.id).populate(
				"products"
			);
			if (listFind) {
				if (currentUserRole === "admin" || listFind.userId == currentUserId) {
					res.status(200).json(listFind);
				} else {
					res.status(403).send("Acces Denied! You cant do this");
				}
			} else {
				res.status(404).send("shopping cart doesnt exist");
			}
		} catch (error) {
			res.status(500).json(error);
		}
	},
	updateFavoriteList: async (req, res) => {
		const listId = req.params.id;
		const { currentUserId } = req.user;

		const listFind = await FavoriteModel.findById(listId);

		if (listFind) {
			if (listFind.userId == currentUserId) {
				try {
					const updatedList = await FavoriteModel.findByIdAndUpdate(
						listId,
						req.body,
						{ new: true }
					);
					res.status(200).json(updatedList);
				} catch (error) {
					res.status(500).json(error);
				}
			} else {
				res.status(403).send("Acces Denied! You cant do this");
			}
		} else {
			res.status(404).send("Favorite list doent exist");
		}
	},
	deleteFavoriteList: async (req, res) => {
		const id = req.params.id;
		const { currentUserRole } = req.user;

		if (currentUserRole === "admin") {
			try {
				await FavoriteModel.findByIdAndDelete(id);
				res.status(200).send("Faovrite list deleted successfully");
			} catch (error) {
				res.status(500).json(error);
			}
		} else {
			res.status(403).send("Acces Denied! You cant do this");
		}
	},
};

module.exports = FavoriteController;
