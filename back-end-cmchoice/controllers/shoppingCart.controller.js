let CartModel = require('../models/shoppingCart.model')
let UserModel = require('../models/user.model')

let CartController = {
    createCart: async (req,res) => {
        const {currentUserId} = req.user
        if ( currentUserId) {
            const user = await UserModel.findById(currentUserId)
            if (user) {
                try {
                    let newCart = new CartModel({userId: currentUserId})
                    const cartCreated = await newCart.save()
                    await UserModel.findByIdAndUpdate(currentUserId, {"shoopingCart": cartCreated._id}, {new: true})
                    res.status(200).json(cartCreated)
                } catch (error) {
                    res.status(500).json(error)
                }
            } else {
                res.status(404).send("User doesnt exist, you cant create this shopping cart")
            }
            
        } else {
            res.status(403).send("Acces Denied! You cant do this")
        }
    },
    all: async (req,res) => {
        const {currentUserRole} = req.user
        if (currentUserRole === "admin") {
            CartModel.find().populate('products.item')
            .then(data => {
              res.json(data)
            })
            .catch(error => console.log(error));
        } else {
            res.status(403).send("Acces Denied! You cant do this")
        }
       
    },
    getShoppingCart: async (req,res) => {
        const {currentUserId, currentUserRole} = req.user
        try {
            let cartFind = await CartModel.findById(req.params.id)
            if (cartFind) {
                console.log(cartFind);
                if ( (cartFind.userId == currentUserId) || currentUserRole === "admin") {
                    await cartFind.populate('products.item')
                    res.status(200).json(cartFind)
                } else {
                    res.status(403).send("Acces Denied! You cant do this")
                } 
              } else {
                  res.status(404).send("shopping cart doesnt exist")
              }
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateShoppingCart: async (req,res) => {
        const cartId = req.params.id
        const {currentUserId, currentUserRole} = req.user

        const cartFind = await CartModel.findById(cartId)

        if (cartFind) {
            if ( cartFind.userId == currentUserId || currentUserRole === "admin") {
                try {
                    
                    const updatedCart = await CartModel.findByIdAndUpdate(cartId, req.body, {new: true})
                    res.status(200).json(updatedCart)
                } catch (error) {
                    res.status(500).json(error)
                }
            } else {
                res.status(403).send("Acces Denied! You cant do this")
            }
        } else {
            res.status(404).send("Shopping Cart doent exist")
        }

       
    },
    deleteShoppingCart: async (req,res) => {
        const id = req.params.id
        const {currentUserRole} = req.user

        if ( currentUserRole === "admin") {
            try {
                await CartModel.findByIdAndDelete(id)
                res.status(200).send("Cart deleted successfully")
            } catch (error) {
                res.status(500).json(error)
            }
        } else {
            res.status(403).send("Acces Denied! You cant do this")
        }
    }
}

module.exports = CartController

