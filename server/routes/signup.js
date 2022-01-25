const { Joi, validate } = require("express-validation")
const { jsonParser } = require("../utils/parsers")

const signup = (app) => {

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

    app.post('/signup', jsonParser, validate(validation), (req, res) => {

        // todo the stuff

        res.json({access_token: null})
    })

}

module.exports = signup