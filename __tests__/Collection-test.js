import 'jsdom-global/register';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount, shallow } from 'enzyme';
import Collections from '../src/Collections';
import CollectionsStyle from '../src/styled-components/Collections-style'

Enzyme.configure({ adapter: new Adapter() });

describe('Collection', () => {
    const adj = ['Social Media', 'News', 'Trending', 'Top 100'];

    it('should display title of the section', () => {
        const wrapper = shallow(<Collections />);
        expect(wrapper.containsMatchingElement('Collections')).toBe(true);
    })

    it('should render adjectives to screen', () => {
        const wrapper = shallow(<Collections adj={adj} />);
        expect(wrapper.find(CollectionsStyle.CollectionContainer).children().length > 0).toBe(true)
    })

    it('should render all of the adjectives to the screen', () => {
        const wrapper = shallow(<Collections adj={adj} />);
        expect(wrapper.find(CollectionsStyle.CollectionContainer).children().length).toBe(4)
    })


})