const jwt = require('jsonwebtoken') 
const dotenv = require('dotenv') 


dotenv.config()
const secret = process.env.JWT_KEY

const authMiddleware = async (req,res,next) => {
    try {
        let authHeader = req.headers.Authorization || req.headers.authorization;
        if (authHeader && authHeader.startsWith("Bearer")) {
            const token = authHeader.split(" ")[1]
            // const token = authHeader
            console.log(token);

            if (token) {
                const decoded = jwt.verify(token,secret)
                console.log(decoded);
                req.user = {
                    currentUserId: decoded?.currentUserId,
                    currentUserRole:decoded?.currentUserRole
                }
            }else {
                res.status(404).send("Token not found")
            }
            next()
        } 
        // else if (req.headers["x-access-token"]) {
        //     const token = req.headers["x-access-token"]
        //     console.log(token);

        //     if (token) {
        //         const decoded = jwt.verify(token,secret)
        //         console.log(decoded);
        //         req.user = {
        //             currentUserId: decoded?.currentUserId,
        //             currentUserRole:decoded?.currentUserRole
        //         }
        //     } else {
        //         res.status(404).send("Token not found")
        //     }
        //     next()
        // }
        else {
            res.status(404).send("Bearer not found");
        }
        
    } catch (error) {
        res.status(401).send("Unvalid Token");
    }
}

module.exports = authMiddleware