let ProductModel = require('../models/product.model')
let UserModel = require('../models/user.model')


let ProductController = {
    create: async (req,res) => {
        const {currentUserRole, currentUserId} = req.user
        const {name} = req.body
        const seller = await UserModel.findById(currentUserId)
        if (seller) {
            if (currentUserRole === "seller") {
                const sameProduct = await ProductModel.findOne({name, sellerId: currentUserId})
                if (sameProduct) {
                    res.status(406).send("You have already use this name for an other product  ")
                } else {
                    let newProduct = new ProductModel({...req.body, sellerId: currentUserId})
                    newProduct.save()
                    .then(data => {
                        seller.sellerProducts.push(data)
                        seller.save()
                        res.status(200).json(data)
                    })      
                    .catch(error => res.status(500).json({message: error.message}));
                }
                
            } else {
                res.status(403).send("Acces Denied! You cant do this")
            }
        } else {
            res.status(404).send("User doesnt exist, you cant create this product")
        }
        
       
    },
    all: async(req,res) => {
        try {
            const { page, limit, name, tag, status, sellerId, subCategory, priceMin, priceMax} = req.query
            let query = {}
            name ? query = {...query, name: { $regex: name }} : query =query
            status ? query = {...query, status} : query =query
            sellerId ? query = {...query, sellerId} : query =query
            subCategory ? query = {...query, subCategory} : query =query
        -   tag ? query = {...query, tags: {$elemMatch: {tag}}} : query =query
            priceMin && priceMax ? query = {...query, price: {$gte: priceMin, $lt: priceMax}} : query =query
            // query = {
            //     name, tag, status, sellerId, subCategory, 
            //     price: {
            //         $gte: priceMin,
            //         $lt: priceMax
            //     }
            // }
            const products = await ProductModel.find(query)
                                    .limit(limit * 1)
                                    .skip((page - 1) * limit)
                                    .sort({ createdAt: -1 })
            res.status(200).json(products)
       
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getProduct: async(req,res) => {
        try {
            let productFind = await ProductModel.findById(req.params.id)
            if (productFind) {
                  res.status(200).json(productFind)
              } else {
                  res.status(404).send("Product doesnt exist")
              }
        } catch (error) {
            res.status(500).json(error)
        }

        
    },
    updateProduct: async(req,res) => {
        const id = req.params.id
        const {currentUserId, currentUserRole} = req.user
        let productFind = await ProductModel.findById(req.params.id)

        if ((productFind.sellerId == currentUserId && currentUserRole === "seller" )|| currentUserRole === "admin") {
            try {
                const updatedProduct = await ProductModel.findByIdAndUpdate(id, req.body, {new: true})
                res.status(200).json(updatedProduct)
            } catch (error) {
                res.status(500).json(error)
            }
        } else {
            res.status(403).send("Acces Denied! You can only update this product")
        }
    },
    deleteProduct: async(req,res) => {
        const id = req.params.id
        const {currentUserId, currentUserRole} = req.user
        let productFind = await ProductModel.findById(req.params.id)

        if ((productFind.sellerId == currentUserId && currentUserRole === "seller" )|| currentUserRole === "admin") {
            try {
                await ProductModel.findByIdAndDelete(id)
                res.status(200).send("Product deleted successfully")
            } catch (error) {
                res.status(500).json(error)
            }
        } else {
            res.status(403).send("Acces Denied! You can only delete this product")
        }
    }
}

module.exports = ProductController

