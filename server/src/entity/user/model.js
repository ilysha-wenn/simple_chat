const {Schema, model} = require('mongoose');

const fields = {
    email: '',
    username: '',
    hashPassword: '',
    date: ''
}

const User = new Schema(fields, {
    email: {type: String, unique: true, required: true},
    username: {type: String, required: true},
    hashPassword: {type: String, required: true},
    date: {type: String, default: Date.now}
})

module.exports = model('User', User);