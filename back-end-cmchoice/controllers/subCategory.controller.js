let SubCategoryModel = require('../models/subCategory.model')
let CategoryModel = require('../models/category.model')


let SubCategoryController = {

    createSubCategory: async (req,res) => {
        const {currentUserRole, categoryId} = req.body

        if ( currentUserRole === "admin") {
            const category = await CategoryModel.findById(categoryId)
            if (category) {
                try {
                    let newSubCategory = new SubCategoryModel(req.body)
                    const subCategoryCreated = await newSubCategory.save()
                    category.subcategories.push(subCategoryCreated)
                    category.save()
                    res.status(200).json(subCategoryCreated)
                    
                } catch (error) {
                    res.status(500).json(error)
                }
            } else {
                res.status(404).send("Category doesnt exist, you cant create this sub-category")
            }
           
        } else {
            res.status(403).send("Acces Denied! You cant do this")
        }
    },
    all: async(req,res) => {
        SubCategoryModel.find().populate('categoryId')
        .then(data => {
          res.json(data)
        })
        .catch(error => console.log(error));
    },
    getSubCategory: async(req,res) => {
        try {
            let subCategoryFind = await SubCategoryModel.findById(req.params.id)
            if (subCategoryFind) {
                  res.status(200).json(subCategoryFind)
              } else {
                  res.status(404).send("Subcategory doesnt exist")
              }
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateSubCategory: async(req,res) => {
        const id = req.params.id
        const {currentUserRole} = req.body

        if ( currentUserRole === "admin") {
            try {
                
                const updatedSubCategory = await SubCategoryModel.findByIdAndUpdate(id, req.body, {new: true})
                res.status(200).json(updatedSubCategory)
            } catch (error) {
                res.status(500).json(error)
            }
        } else {
            res.status(403).send("Acces Denied! You cant do this")
        }
    },
    deleteSubCategory: async(req,res) => {
        const id = req.params.id
        const {currentUserRole} = req.body

        if ( currentUserRole === "admin") {
            try {
                await SubCategoryModel.findByIdAndDelete(id)
                res.status(200).send("Subcategory deleted successfully")
            } catch (error) {
                res.status(500).json(error)
            }
        } else {
            res.status(403).send("Acces Denied! You cant do this")
        }
    }
    
}

module.exports = SubCategoryController