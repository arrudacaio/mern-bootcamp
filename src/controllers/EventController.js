const Event = require('../models/Event');
const User = require('../models/User');

const bcrypt = require('bcrypt');

module.exports = {
    async createEvent(req,res){
        try {
            const {title, description, price} = req.body;
            const { user_id } = req.headers;
            const { fileName } = req.file;
            const user = await User.findById(user_id);


            if(!user){
                return res.status(400).json({message: 'User does not exist!'})
            }

            const event = await Event.create({
                title,
                description,
                price: parseFloat(price), 
                thumbnail: fileName,  
                user: user_id, // created a relation user -- event
            });

            return res.json(event);



        } catch (error) {
            return res.status(400).json({message: "error a create event"});
        }
    }
}