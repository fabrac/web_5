const passwordValidator = require('password-validator');
const schema = new passwordValidator();
schema.is().min(8, "Votre mot de passe doit contenir au minimum 8 caractères")
.is().max(100, "Votre mot de passe doit contenir au maximum 100 caractères")
.has().uppercase(1, "Votre mot de passe doit contenir au minimum 1 majuscule")
.has().lowercase(1, "Votre mot de passe doit contenir au minimum 1 minuscule")
.has().symbols(1, "Votre mot de passe doit contenir au minimum 1 symbole")
.has().digits(1, "Votre mot de passe doit contenir au minimum 1 nombre");
module.exports = schema;