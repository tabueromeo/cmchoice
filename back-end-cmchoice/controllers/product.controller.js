let ProductModel = require('../models/product.model')

let ProductController = {
    create: async (req,res) => {
        let newProduct = new ProductModel(req.body)
        newProduct.save()
        .then(data => {
            res.status(200).json(data)
        })      
        .catch(error => res.status(500).json({message: error.message}));
    },
    all: async(req,res) => {
        ProductModel.find()
        .then(data => {
          res.json(data)
          console.log("yaaaaaa");
        })
        .catch(error => console.log(error));
    },
    getUser: async(req,res) => {
        try {
            let userFind = await UserModel.findById(req.params.id)
            if (userFind) {
                const {password, ...otherDetails} = userFind._doc
                  res.status(200).json(otherDetails)
              } else {
                  res.status(404).send("User doesnt exist")
              }
        } catch (error) {
            res.status(500).json(error)
        }

        
    },
    updateProduct: async(req,res) => {
        const id = req.params.id
        const {currentUserId, currentUserRole} = req.body

        if (id === currentUserId || currentUserRole === "admin") {
            try {
                if (password) {
                    //cryptage du password
                    const salt =  bcrypt.genSaltSync(10);
                    req.body.password =  bcrypt.hashSync(password, salt);
                }
                const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true})
                res.status(200).json(user)
            } catch (error) {
                res.status(500).json(error)
            }
        } else {
            res.status(403).send("Acces Denied! You can only update your profile")
        }
    },
    deleteUser: async(req,res) => {
        const id = req.params.id
        const {currentUserId, currentUserRole} = req.body

        if (id === currentUserId || currentUserRole === "admin") {
            try {
                await UserModel.findByIdAndDelete(id)
                res.status(200).send("User deleted successfully")
            } catch (error) {
                res.status(500).json(error)
            }
        } else {
            res.status(403).send("Acces Denied! You can only delete your profile")
        }
    }
}

module.exports = ProductController

