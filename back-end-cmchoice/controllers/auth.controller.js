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
            const token = jwt.sign({phoneNumber: data.phoneNumber, currentUserId: data._id, currentUserRole: data.role}, process.env.JWT_KEY, {expiresIn: '1h'})
             // Creating refresh token not that expiry of refresh 
            //token is greater than the access token
            const refreshToken = jwt.sign({
                currentUserId: data._id,
            }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });
            res.cookie('jwt', refreshToken, { httpOnly: true, 
                sameSite: 'None', secure: true, 
                maxAge: 24 * 60 * 60 * 1000 })
            .status(200).json({user: data, token})
        })
        .catch(error => {
            if (error.keyValue) {
                res.status(409).send("Phone Number or email already used")
            } 
            // else if (error.keyValue.email) {
            //     res.status(409).send("Email already used")
            // } 
            else {
                res.status(500).json({message: error.message})
            }
            
        });
    },
    login: async (req,res) => {
        const {email, phoneNumber} = req.body
        try {
            let userFindByMail = null
            let userFindByPhone = null
    
            if (email) {
                userFindByMail = await UserModel.findOne({email}).populate('shoopingCart').populate('favorites')
            } else if (phoneNumber) {
                userFindByPhone = await UserModel.findOne({phoneNumber})
                // .populate('shoopingCart').populate('favorites')
            }
            let user = userFindByMail ?? userFindByPhone
            await user.populate([{path: 'shoopingCart', populate: [{ path: 'products.item'}, {path: 'commands.command'}]}, {path: 'favorites', populate: { path: 'products.product' }}])
            if(user) {
                if (user.sellerProducts.length > 0) {
                    // populate ne marchent pas sur les tableaux vide
                    await user.populate('sellerProducts')
                }
                const validity = bcrypt.compareSync(req.body.password, user.password)
                // validity ? res.status(200).json(user) : res.status(400).send("Wrong password")
                if (!validity) {
                    res.status(400).send("Wrong password")
                } else {
                    // Creating access token 
                    const token = jwt.sign({phoneNumber: user.phoneNumber, currentUserId: user._id, currentUserRole: user.role}, process.env.JWT_KEY, {expiresIn: '1h'})
                    
                    // Creating refresh token not that expiry of refresh 
                    //token is greater than the access token
                    const refreshToken = jwt.sign({
                        currentUserId: user._id,
                    }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });
            
                    // Assigning refresh token in http-only cookie 
                    res.cookie('jwt', refreshToken, { httpOnly: true, 
                        sameSite: 'None', secure: true, 
                        maxAge: 24 * 60 * 60 * 1000 })
                    .status(200).json({user,token})
                }
            }else {
                res.status(404).send("User doesnt exist")
            }
        } catch (error) {
            res.status(500).json(error)
        }
        

       
    },
    refresh: async (req,res) => {
        // if (req.cookies?.jwt) {
        if (req.headers["x-refresh-token"]) {

            // Destructuring refreshToken from cookie
            // const refreshToken = req.cookies.jwt;
            const refreshToken = req.headers["x-refresh-token"];

            try {
                // Verifying refresh token
                const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)

                if (decoded?.currentUserId) {
                    const user = await UserModel.findById(decoded?.currentUserId)

                    const token = jwt.sign({
                        currentUserId: user._id,
                        currentUserRole: user.role,
                        phoneNumber: user.phoneNumber
                    }, process.env.JWT_KEY, {
                        expiresIn: '10m'
                    });
                    res.status(201).json({ token });
                } else {
                    // Wrong Refesh Token
                    res.status(406).json({ message: 'Unauthorized' });
                }
            } catch (error) {
                // Wrong Refesh Token
                return res.status(406).json({ message: 'Unauthorized' });
            }
  
        } else {
            return res.status(406).json({ message: 'Unauthorized' });
        }
    }
}

module.exports = AuthController