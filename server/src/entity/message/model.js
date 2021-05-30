const {Schema, model} = require('mongoose');

const fields = {
    text: '',
    user: '',
    date: ''
}

const Message = new Schema(fields, {
    text: {required: true, type: String},
    user: {required: true, type: String, ref: "User"},
    date: {default: Date.now, type: String}
})

module.exports = model('Message', Message);