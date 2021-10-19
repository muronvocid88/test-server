const User = require("../model/Auth")

function Login(req,res) {
    return res.json({ message: 'Success' });
}

function Register(req, res) {
    var username = req.body.username
    var email = req.body.email
    var password = req.body.password
}

module.exports = {
    Login,
    Register
}