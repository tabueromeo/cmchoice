let UserModel = require('../models/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let AuthController = {
    register: async (req,res) => {
        //cryptage du password
        const salt = bcrypt.genSaltSync(10);
        req.body.password = bcrypt.hashSync(req.body.password, salt);
        
        // enregistrement d'un nouvel utilisateur
        let newUser = new UserModel(req.body)
        newUser.save()
        .then(data => {
            const token = jwt.sign({phoneNumber: data.phoneNumber, id: data._id}, process.env.JWT_KEY, {expiresIn: '1h'})
            res.status(200).json({data, token})
        })
        .catch(error => {
            if (error.keyValue.phoneNumber) {
                res.status(400).send("Phone Number already used")
            } else if (error.keyValue.email) {
                res.status(400).send("Email already used")
            } else {
                res.status(500).json({message: error.message})
            }
            
        });
    },
    login: async (req,res) => {
        try {
            if (req.body.email) {
                user = await UserModel.findOne({email: req.body.email})
            } else if (req.body.phoneNumber) {
                user = await UserModel.findOne({phoneNumber: req.body.phoneNumber}) 
            }
        } catch (error) {
            res.status(500).json(error)
        }
        

        if(user) {
            const validity = bcrypt.compareSync(req.body.password, user.password)
            validity ? res.status(200).json(user) : res.status(400).send("Wrong password")
            if (!validity) {
                res.status(400).send("Wrong password")
            } else {
                const token = jwt.sign({phoneNumber: data.phoneNumber, id: data._id}, process.env.JWT_KEY, {expiresIn: '1h'})
                res.status(200).json({user,token})
            }
        }else {
            res.status(404).send("User doesnt exist")
        }
    }
}

module.exports = AuthController