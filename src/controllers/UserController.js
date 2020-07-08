const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
    async store(req,res){
        try {

            const {firstName, lastName, password, email} = req.body;
            const existentUser = await User.findOne({email});

            if(!existentUser) {
                const hashedPassword = await bcrypt.hash(password, 10);
                const user = await User.create({
                    firstName: firstName,
                    lastName: lastName, 
                    password: hashedPassword,
                    email: email,
                });

                return res.json(user);

            }

            return res.status(400).json({
                message: 'email/user already exist',
            });

            

        } catch (error) {
            throw Error(`Error while registering a new user: ${error}`);
        }

    }
}