const Joi = require('joi')

module.exports = {
    signup(req, res, next) {
        const schema = Joi.object({
            fullname: Joi.string().regex(
                new RegExp('^[a-z A-z]{5,100}$')
            ),
            email: Joi.string().email(),
            mobilephone: Joi.string().regex(
                new RegExp('^[0-9]{10}$')
            ),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        })
        const {error} = schema.validate(req.body)

        if (error) {
            switch (error.details[0].context.key) {
                case 'fullname':
                    res.status(400).send({
                        error: 'You must provide a valid full name'
                    });
                    break;
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address'
                    });
                    break;
                case 'mobilephone':
                    res.status(400).send({
                        error: `The mobilephone provided failed to match the following rules:
                        <br>
                        1.It must contain ONLY the following characters: numerics.
                        <br>
                        2. It must be at 10 characters in length.`
                    });
                    break;

                case 'password':
                    res.status(400).send({
                        error: `The password provided failed to match the following rules:
                        <br>
                        1.It must contain ONLY the following characters: lower case, upper case, numerics.
                        <br>
                        2. It must be at least 8 characters in length and not greater than 32 characters in length.`
                    });
                    break;
                default:
                    res.status(400).send(error);
            }
        } else {
            next()

        }
    }
}