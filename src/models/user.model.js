const mongoose = require('mongoose');
const userBillSchema = mongoose.Schema ({
    name: {
        type: String,
        require: true,
        min: 3,
    },
    lastname: {
        type: String,
        require: true,
        min: 3,
    },
    email: {
        type: String,
        require: true,
    },
    active: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model('UserBillCollection', userBillSchema);