const Joi = require('@hapi/joi');

const postValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        description: Joi.string().min(6).required(),
        image: Joi.string().min(6).required(),
        privacy: Joi.string().min(6).required()
    });

    const options = {
        errors: {
            wrap: {
                label: ''
            }
        }
    };
    return schema.validate(data, options);
};

const commentValidation = (data) => {
    const schema = Joi.object({
        comment: Joi.string().min(2).required(),
        upvotes: Joi.required(),
        downvotes: Joi.required()
    });

    const options = {
        errors: {
            wrap: {
                label: ''
            }
        }
    };
    return schema.validate(data, options);
}

const registerValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string().min(6).required(),
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
        confirm_password: Joi.string().min(6).required()
    });

    const options = {
        errors: {
            wrap: {
                label: ''
            }
        }
    };
    return schema.validate(data, options);
};

const loginValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string().min(6).required().messages({
            'string.base': `Please enter a valid username`,
            'string.empty': `Please enter a username`,
            'string.min': `Your username should have a minimum length of {#limit} characters`,
            'any.required': `The username field is required`
        }),
        password: Joi.string().min(6).required().messages({
            'string.base': `Please enter a valid password`,
            'string.empty': `Please enter a password`,
            'string.min': `Your password should have a minimum length of {#limit} characters`,
            'any.required': `The password field is required`
        }),
    });

    const options = {
        errors: {
            wrap: {
                label: ''
            }
        }
    };
    return schema.validate(data, options);
};

module.exports.postValidation = postValidation;
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.commentValidation = commentValidation;