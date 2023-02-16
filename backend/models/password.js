const passwordValidator = require('password-validator');
const schema = new passwordValidator();
schema.not().min(8, "Votre mot de passe doit contenir au minimum 8 caractères")
.not().max(100, "Votre mot de passe doit contenir au maximum 100 caractères")
.not().uppercase(1, "Votre mot de passe doit contenir au minimum 1 majuscule")
.not().lowercase(1, "Votre mot de passe doit contenir au minimum 1 minuscule")
.not().symbols(1, "Votre mot de passe doit contenir au minimum 1 symbole")
.not().digits(1, "Votre mot de passe doit contenir au minimum 1 nombre");
module.exports = schema;