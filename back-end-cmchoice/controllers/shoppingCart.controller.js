let CartModel = require('../models/shoppingCart.model')
let UserModel = require('../models/user.model')

let CartController = {
    createCart: async (req,res) => {
        const {userId} = req.body
        if ( userId) {
            const user = await UserModel.findById(userId)
            if (user) {
                try {
                    let newCart = new CartModel(req.body)
                    const cartCreated = await newCart.save()
                    await UserModel.findByIdAndUpdate(userId, {"shoopingCart": cartCreated._id}, {new: true})
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
        CartModel.find()
        .then(data => {
          res.json(data)
        })
        .catch(error => console.log(error));
    },
    getShoppingCart: async (req,res) => {
        try {
            let cartFind = await CartModel.findById(req.params.id)
            if (cartFind) {
                  res.status(200).json(cartFind)
              } else {
                  res.status(404).send("shopping cart doesnt exist")
              }
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateShoppingCart: async (req,res) => {
        const cartId = req.params.id
        const {userId, currentUserRole} = req.body

        const cartFind = await CartModel.findById(cartId)

        if ( cartFind.userId === userId || currentUserRole === "admin") {
            try {
                
                const updatedCart = await CartModel.findByIdAndUpdate(cartId, req.body, {new: true})
                res.status(200).json(updatedCart)
            } catch (error) {
                res.status(500).json(error)
            }
        } else {
            res.status(403).send("Acces Denied! You cant do this")
        }
    }
}

module.exports = CartController

