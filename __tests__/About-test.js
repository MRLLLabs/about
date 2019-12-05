import 'jsdom-global/register';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount, shallow } from 'enzyme';
import About from '../src/About';
import AboutStyle from '../src/styled-components/About-style'


Enzyme.configure({ adapter: new Adapter() });

describe('About', () => {

    const companyData = {
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

    it('should display the title of the section', () => {
        const wrapper = shallow(<About />, { disableLifecycleMethods: true });
        expect(wrapper.containsMatchingElement('About')).toBe(true);
    })

    it('should have readMore state set to false when component first renders', () => {
        const wrapper = mount(<About />);
        expect(wrapper.state().readMore).toBe(false);
    })

    it('should have readMore state set to true when Read More is clicked', () => {
        const wrapper = mount(<About />);
        wrapper.setState({
          readMore: false,
          showMore: false,
          currentData: companyData,
        })
        wrapper.find(AboutStyle.Read).simulate('click');
        expect(wrapper.state().readMore).toBe(true);
    })

    it('should have showMore state set to true when Show More is clicked', () => {
        const wrapper = mount(<About />);
        wrapper.setState({
            readMore: false,
            showMore: false,
            currentData: companyData,
          })
          wrapper.find(AboutStyle.Show).simulate('click');
          expect(wrapper.state().showMore).toBe(true);
    })

    it('should render additional company information about the company when About More is clicked', () => {
        const wrapper = mount(<About />);
        wrapper.setState({
            readMore: false,
            showMore: false,
            currentData: companyData,
          })
          var before = wrapper.find(AboutStyle.AboutText).html();
          wrapper.find(AboutStyle.Read).simulate('click');
          var after = wrapper.find(AboutStyle.AboutText).html();
          expect(before === after).toBe(false);
    })

    it('should render additional company information when Show More is clicked', () => {
        const wrapper = mount(<About />);
        wrapper.setState({
            readMore: false,
            showMore: false,
            currentData: companyData,
          })
          var lengthBefore = wrapper.find(AboutStyle.GridItem).length;
          wrapper.find(AboutStyle.Show).simulate('click');
          var lengthAfter = wrapper.find(AboutStyle.GridItem).length;
          expect(lengthBefore < lengthAfter).toBe(true);
    })
})

    