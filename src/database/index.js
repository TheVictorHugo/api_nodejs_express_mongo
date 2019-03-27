const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/noderest', { useMongoClient: treu});
mongoose.Promise = global.Promise;

module.exports = mongoose;