
let CommandModel = require('../models/command.model')
let CartModel = require('../models/shoppingCart.model')

const mongoose = require('mongoose');
let ObjectId = require('mongodb').ObjectId




let CommandController = {
    all: async(req,res) => {
        const {currentUserRole} = req.user
        if (currentUserRole === 'admin') {
            CommandModel.find()
            .then(data => {
              res.json(data)
            })
            .catch(error => console.log(error));
        } else {
            res.status(403).send("Acces Denied! You cant do this")
        }
       
    },
    createCommand: async(req,res) => {
        const cartId = req.body.shoppingCart
        // const currentUserId =  new mongoose.Types.ObjectId(req.body.currentUserId)
        const {currentUserId} =  req.user
        if ( cartId) {
            const cart = await CartModel.findById(cartId)
            if (currentUserId == cart.userId) {
                try {
                    let newCommand = new CommandModel(req.body)
                    const commandCreated = await newCommand.save()
                    cart.commands.push({command: commandCreated}) 
                    cart.products = []
                    cart.save()
                    res.status(200).json(commandCreated)
                    
                } catch (error) {
                    res.status(500).json(error)
                }
            } else {
                res.status(403).send("Acces Denied! 2 You cant do this")
            }
            
        } else {
            res.status(403).send("Acces Denied! You cant do this")
        }
    },
    getCommand: async(req,res) => {
        try {
            let commandFind = await CommandModel.findById(req.params.id)
            if (commandFind) {
                  res.status(200).json(commandFind)
              } else {
                  res.status(404).send("Command doesnt exist")
              }
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateCommand: async(req,res) => {
        console.log("ok command");
        const id = req.params.id
        const {currentUserRole, currentUserId} = req.user
        const cartId = req.body.shoppingCart


        const cart = await CartModel.findById(cartId).populate('userId')

        if ( currentUserRole === "admin" || cart.userId === currentUserId) {
            try {
                
                const updatedCommand = await CommandModel.findByIdAndUpdate(id, req.body, {new: true})
                res.status(200).json(updatedCommand)
            } catch (error) {
                res.status(500).json(error)
            }
        } else {
            res.status(403).send("Acces Denied! You cant do this")
        }
    },
    deleteCommand: async(req,res) => {
        const id = req.params.id
        const {currentUserRole} = req.user

        if ( currentUserRole === "admin") {
            try {
                await CommandModel.findByIdAndDelete(id)
                res.status(200).send("Command deleted successfully")
            } catch (error) {
                res.status(500).json(error)
            }
        } else {
            res.status(403).send("Acces Denied! You cant do this")
        }
    }
}

module.exports = CommandController

