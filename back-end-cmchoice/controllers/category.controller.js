let CategoryModel = require('../models/category.model')

let CategoryController = {

    createCategory: async (req,res) => {
        const {currentUserRole} = req.user

        if ( currentUserRole === "admin") {
            try {
                let newCategory = new CategoryModel(req.body)
                const categoryCreated = await newCategory.save()
                res.status(200).json(categoryCreated)
                
            } catch (error) {
                res.status(500).json(error)
            }
        } else {
            res.status(403).send("Acces Denied! You cant do this")
        }
    },
    all: async(req,res) => {
        CategoryModel.find().populate('subcategories')
        .then(data => {
          res.json(data)
        })
        .catch(error => console.log(error));
    },
    getCategory: async(req,res) => {
        try {
            let categoryFind = await CategoryModel.findById(req.params.id).populate('subcategories')
            if (categoryFind) {
                  res.status(200).json(categoryFind)
              } else {
                  res.status(404).send("Category doesnt exist")
              }
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateCategory: async(req,res) => {
        const id = req.params.id
        const {currentUserRole} = req.user

        if ( currentUserRole === "admin") {
            try {
                
                const updatedCategory = await CategoryModel.findByIdAndUpdate(id, req.body, {new: true})
                res.status(200).json(updatedCategory)
            } catch (error) {
                res.status(500).json(error)
            }
        } else {
            res.status(403).send("Acces Denied! You cant do this")
        }
    },
    deleteCategory: async(req,res) => {
        const id = req.params.id
        const {currentUserRole} = req.user

        if ( currentUserRole === "admin") {
            try {
                await CategoryModel.findByIdAndDelete(id)
                res.status(200).send("Category deleted successfully")
            } catch (error) {
                res.status(500).json(error)
            }
        } else {
            res.status(403).send("Acces Denied! You cant do this")
        }
    }
    
}

module.exports = CategoryController