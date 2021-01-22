const router = require('express').Router();
const User = require('../../model/User');
const bcrypt = require('bcryptjs');
const { registerValidation, loginValidation } = require('../../validation/validation');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../config/keys').secret;

/**
 * @route POST /register
 * @desc Register the User
 * @access Public
 */

// get all users
router.get('/user',  async (req, res) => {
    const users = await User.find();
    return res.json({
        users: users
    });
})

// get all users except one
router.get('/explorable-users/username/:username',  async (req, res) => {
    const users = await User.find({ username: { $ne: req.params.username } });
    return res.json({
        users: users
    });
})

// register
router.post('/register', async(req, res) => {
    // validate data before user is created
    const { error } = registerValidation(req.body);
    if(error) {
        return res.status(404).json({
            success: false,
            msg: 'Your ' + error.details[0].message
        });
    }

    // check if user exists
    const isUsernameTaken = await User.findOne({ username: req.body.username });
    const isEmailTaken = await User.findOne({ email: req.body.email });

    if(isUsernameTaken || isEmailTaken) {
        return res.status(404).json({
            success: false,
            msg: 'The username or email you have entered is already registered'
        });
    }

    // check if passwords match
    if(req.body.password !== req.body.confirm_password) {
        return res.status(404).json({
            success: false,
            msg: 'The passwords you have entered do not match'
        });
    }

    // hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create new user
    const newUser = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        confirm_password: req.body.password
    });
    try {
        const savedUser = await newUser.save();
        newUser.save().then(user => {
            return res.status(201).json({
                success: true,
                msg: "Registration successful"
            });
        });
    } catch(err) {
        res.status(404).send(err);
    }
});


/**
 * @route POST /login
 * @desc Signing in the User
 * @access Public
 */

// login
router.post('/login', async(req, res) => {
    // validate data
    const { error } = loginValidation(req.body);
    if(error) {
        return res.status(404).json({
            success: false,
            msg: error.details[0].message
        });
    }
    
    // check if email exists
    const user = await User.findOne({ username: req.body.username });

    if(!user) {
        return res.status(404).json({
            success: false,
            msg: 'The username you have entered does not exist'
        });
    }

    // if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(validPassword) {
        const payload = {
            _id: user._id,
            username: user.username,
            name: user.name,
            email: user.email
        }
        jwt.sign(payload, key, {
            expiresIn: 604800
        }, (err, token) => {
            res.status(200).json({
                success: true,
                user: user,
                token: `Bearer ${token}`,
                msg: "User is now logged in."
            });
        })
    } else {
        return res.status(404).json({
            success: false,
            msg: "The password you have entered is not valid"
        });
    }
})



/**
 * @route POST /profile
 * @desc Return the User's Data
 * @access Private
 */

 // profile
router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        user: req.user
    });
});
module.exports = router;