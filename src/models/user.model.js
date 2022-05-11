const mongoose = require('mongoose');
const userSchema = mongoose.Schema ({
    name: String,
    lastname: String,
    email: {
        type: String,
        require: true,
    },
    password: String,
    role: String,
    active: Boolean,
    avator: String,
});

module.exports = mongoose.model('User', userSchema);