const Event = require('../models/Event');
const User = require('../models/User');

const bcrypt = require('bcrypt');

module.exports = {
    async createEvent(req,res){
        try {
            const {title, description, price} = req.body;

            const { userId } = req.headers;
            const { fileName } = req.file;
            const user = await User.findById(userId);


            if(!user){
                return res.send(400).json({message: 'User does not exist!'})
            }

            const event = await Event.create({
                title,
                description,
                price, 
                thumbnail: fileName,
                user: userId, // created a relation user -- event
            });

            return res.json(event);



        } catch (error) {
            
        }
    }
}