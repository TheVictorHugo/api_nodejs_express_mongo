const express = require('express');
const User = require('.../models/user');
const router = express.Router();

router.post('/registre', async(req, res) =>{
    try {
        if(await user.findOne({ email })){
            return res.status(400).send({ error: 'User already exists' });
        }
        const user = await User.create(req.body);

        user.passworld = undefined;
        return res.send({ user });
    } catch(err){
        return res.status(400).send({ error: 'Registration failed' });
    }
});


module.exports = app => app.user('/auth', router);