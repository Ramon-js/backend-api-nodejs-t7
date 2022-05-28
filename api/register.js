//const { find } = require('lodash') essa é a correta
const { model } = require('mongoose') //na aula 9.2 ta dessa forma.

const beautifulUnique = require('mongoose-beautiful-unique-validation') // na aula 9.2 ta beautifulUnique  -- no meu codigo estava "beautifyUnique"
const restful = require('node-restful')
const mongoose = restful.mongoose


const registerSchema = new mongoose.Schema({
    fullName: { type: String, required: true},
    mail: {type: String, required: true},
    phone: {type: String, required: false},
    address: {type: String, required: true},
    number: {type: Number, required: false}, //Number tava com N maiusculo no meu codigo
    complement: {type: String, required: false} //Complement tava com C maiusculo no meu codigo

})

registerSchema.plugin(beautifulUnique) //No meu codigo estava "beautifyUnique"

module.exports = restful.model('Register', registerSchema)
