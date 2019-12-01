const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

var companyInfoSchema = mongoose.Schema({
    name: String,
    description: String,
    CEO: String,
    MarketCap: String,
    HighToday: String,
    LowToday: String,
    HighYear: String,
    LowYear: String,
    EmployeeCount: Number,
    EarningsRatio: Number,
    Headquarters: String,
    DividendYield: Number,
    OpenPrice: String,
    Founded: Number,
    AvgVolume: String,
    Volume: String,
})


var Company = mongoose.model('Company', companyInfoSchema);

module.exports = Company;
