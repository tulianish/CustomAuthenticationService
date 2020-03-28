const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authapi')
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'),
    Session: require('../users/session.model')
};