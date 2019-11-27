const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost', {useNewUrlParser: true}).then(() => {
    console.log("Database connected!")
});

var companyInfoSchema = new mongoose.Schema({
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