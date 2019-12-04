const mongoose = require('mongoose');
const Company = require('../database/Company.js');
require("@babel/polyfill");

const companyData = {"description" : "Quae eum quod. Repellat qui est recusandae quos laudantium illo dignissimos. Aut sunt voluptatem. Rerum labore ab et dignissimos et qui illo vel nihil.\n \rDolor nesciunt vel et laboriosam est praesentium aut laboriosam sit. Aut eligendi doloribus. Provident illum eligendi iste repudiandae aliquid quis. Ut optio culpa soluta commodi. Assumenda impedit est. Consequatur et perferendis dolorem eaque nulla.\n \rReprehenderit eum saepe voluptas voluptas aut natus ea eum. Ducimus reiciendis eius voluptatem molestias modi quas sequi. Unde dolore non ut facere error ut.", 
"CEO" : "Rowland Rodriguez", 
"MarketCap" : "47.91M", 
"EmployeeCount" : 14535, 
"Founded" : 1990, 
"EarningsRatio" : 29.82, 
"Headquarters" : "Camrenmouth, Florida", 
"DividendYield" : 0, 
"AvgVolume" : "90.87M", 
"HighToday" : "$299.67", 
"LowToday" : "$19.6", 
"HighYear" : "$752.3", 
"LowYear" : "$68.96", 
"OpenPrice" : "$599.45"
};

describe('Company Model Test', () => {

    beforeAll(async () => {
        await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    it('should insert ratings doc into collection', async () => {
        const validData = new Company(companyData);
        const savedData = await validData.save();
        expect(savedData._id).toBeDefined();
        expect(savedData.description).toBe(companyData.description);
        expect(savedData.CEO).toBe(companyData.CEO);
        expect(savedData.MarketCap).toBe(companyData.MarketCap);
        expect(savedData.EmployeeCount).toBe(companyData.EmployeeCount);
        expect(savedData.Founded).toBe(companyData.Founded);
        expect(savedData.EarningsRatio).toBe(companyData.EarningsRatio);
        expect(savedData.Headquarters).toBe(companyData.Headquarters);
        expect(savedData.DividendYield).toBe(companyData.DividendYield);
        expect(savedData.AvgVolume).toBe(companyData.AvgVolume);
        expect(savedData.HighToday).toBe(companyData.HighToday);
        expect(savedData.LowToday).toBe(companyData.LowToday);
        expect(savedData.HighYear).toBe(companyData.HighYear);
        expect(savedData.OpenPrice).toBe(companyData.OpenPrice);
    });

    it('insert rating data successfully, but the field does not defined in schema should be undefined', async () => {
        const dataWithInvalidField = new Company({ "CEO" : "Rowland Rodriguez", "summary": "Blanditiis sed consequatur qui quia cupiditate enim. Asperiores qui nostrum voluptas est nesciunt unde. Est explicabo quo sequi nesciunt. Dolore fugiat dolore reprehenderit. Rerum nostrum voluptatem distinctio laboriosam." });
        const savedDataWithInvalidField = await dataWithInvalidField.save();
        expect(savedDataWithInvalidField._id).toBeDefined();
        expect(savedDataWithInvalidField.description).toBeUndefined();
    });    
})