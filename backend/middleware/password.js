const passwordSchema = require('../models/password');

module.exports = (req, res, next) => {
    if (passwordSchema.validate(req.body.password)) {
        next();
    }
    else {
        res.status(400).json({message: "Votre mot de passe doit contenir au minimum 8 caractères, maximum 100 caractères, 1 majuscule, 1 miniscule, 1 chiffre et 1 caractère"});
    }
}