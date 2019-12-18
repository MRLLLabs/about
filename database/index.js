const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/robinhood_companies';

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = db;
