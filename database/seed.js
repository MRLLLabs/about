const db = require('./index.js');
const Company = require('./Company.js');
const faker = require('faker');

var sampleAdjectives = function () {
    var words = [];
    for (var i = 0; i < Math.floor(Math.random() * (9-3) + 3); i++) {
    var word = faker.commerce.productAdjective();
    if (!words.includes(word)) {
        words.push(word)}
    }
    return JSON.stringify(words);
}

var sampleData = function () {
    var companyInfo = [];
    
    for (var i = 0; i < 100; i++ ) {
        var info = {};
        var highEnd = '$' + (Math.floor(Math.random() * (800 * 100 - 1 * 100) + 1 * 100) / (1*100)).toString();
        var lowEnd = '$' + (Math.floor(Math.random() * (100 * 100 - 1 * 100) + 1 * 100) / (1*100)).toString();
        info.company = faker.company.companyName();
        info.description = faker.lorem.paragraphs();
        info.adjectives = sampleAdjectives();
        info.CEO = faker.name.findName();
        info.MarketCap = (Math.floor(Math.random() * (100 * 100 - 1 * 100) + 1 * 100) / (1*100)).toString() + 'M';
        info.EmployeeCount = Math.round(Math.random() * (150000 - 100) + 100);
        info.Founded = Math.round(Math.random() * (2015 - 1920) + 1920);
        info.EarningsRatio = (Math.floor(Math.random() * (100 * 100 - 1 * 100) + 1 * 100) / (1*100));
        info.Headquarters = faker.address.city() + ', ' + faker.address.state();
        info.DividendYield = (Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1*100));
        info.AvgVolume = (Math.floor(Math.random() * (100 * 100 - 1 * 100) + 1 * 100) / (1*100)).toString() + 'M';
        info.HighToday = highEnd;
        info.LowToday = lowEnd;
        info.HighYear = highEnd;
        info.LowYear = lowEnd;
        info.OpenPrice = highEnd;
        info.Volume = (Math.floor(Math.random() * (100 * 100 - 1 * 100) + 1 * 100) / (1*100)).toString() + 'M';
        companyInfo.push(info);
    }
    return companyInfo
    }

    var data = sampleData();

const insertSampleData = function() {
    Company.create(data)
  };
  
  insertSampleData();