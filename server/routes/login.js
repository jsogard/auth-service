const { Joi, validate } = require("express-validation");
const { jsonParser } = require('../utils/parsers')

const login = (app) => {

    const validation = {
        body: Joi.object({
            email: Joi.string()
                .email()
                .required(),
            password: Joi.string()
                .min(6)
                .required()
        })
    }

    app.post('/login', jsonParser, validate(validation), (req, res) => {

        //todo check the user

        res.json({ access_token: null })

    }
}

module.exports = login