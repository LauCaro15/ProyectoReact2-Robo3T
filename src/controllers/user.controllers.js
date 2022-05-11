const bcrypt = require("bcrypt-nodejs");
const User = require("../models/user.model");
const rondasDeSal = 10;

function signUp(req, res){
    const user = new User();
    const { email, password, repeatPassword } = req.body;
    user.email = email;
    user.role = "admin";
    user.active = true;
    
    if (!password || !repeatPassword){
        res.status(404).send({ message: "No coinciden" })
    } else {
        if (password == repeatPassword){
            console.log('Welcome')
            /* bcrypt.hash(user.password, rondasDeSal,(err, passwordEncriptado) =>{
                if(err){
                    console.log("Error hasheando:", err);
                    res.status(500).send({ message: "No coinciden" })
                } else {
                    console.log("Hasheada es:", + passwordEncriptado);
                }
            }); */
        }
    }
}
module.exports = { signUp };
