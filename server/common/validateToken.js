var jwt = require('jsonwebtoken')

function validateToken(req, res, next) {
    var token = req.headers.authorization
    if (token) {
        jwt.verify(token, "appToken", function (e) {
            if (e) {
                throw new Error("Invalid Token")
                // res.send("Invalid token")
            } else {
                next();
            }
        })
    } else {
        throw new Error("Token missing")
        // res.send("token missing")
    }

}
module.exports = validateToken