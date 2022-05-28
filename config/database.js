const {lazyrouter} = require('express/lib/application')
const mongoose = require('mongoose')
const args = require('args-parser')(process.argv)
mongoose.Promise = require('Bluebird')

if(args.production)
    module.exports = mongoose.connect('mongodb://usuario:@servidor.com.br:27017/senha',{useNewUrlParser: true })
else
    module.exports = mongoose.connect('mongodb://localhost/banco_dadosT7')

mongoose.Error.messages.general.required = "O campo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{PATH}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{PATH}' não é válido para o campo '{MAX}'." //o primeiro é {VALUE}
mongoose.Error.messages.String = "O '{VALUE}' não é válido para o campo '{PATH}'."


