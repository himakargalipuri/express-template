const Joi = require('joi');
 
const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30).required(),
    
    email: Joi.string().email({ minDomainAtoms: 2 })
})