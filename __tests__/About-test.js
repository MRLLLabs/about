import React from 'react';
import { shallow } from 'enzyme';
import About from '../src/About';


describe('About', () => {
    const data = {
    "description" : "Quae eum quod. Repellat qui est recusandae quos laudantium illo dignissimos. Aut sunt voluptatem. Rerum labore ab et dignissimos et qui illo vel nihil.\n \rDolor nesciunt vel et laboriosam est praesentium aut laboriosam sit. Aut eligendi doloribus. Provident illum eligendi iste repudiandae aliquid quis. Ut optio culpa soluta commodi. Assumenda impedit est. Consequatur et perferendis dolorem eaque nulla.\n \rReprehenderit eum saepe voluptas voluptas aut natus ea eum. Ducimus reiciendis eius voluptatem molestias modi quas sequi. Unde dolore non ut facere error ut.", 
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

    it('displays the name of the CEO', () => {
        const wrapper = shallow(<About />)
        expect(wrapper.find('div').text()).toEqual('Rowland Rodriguez')
    })
})