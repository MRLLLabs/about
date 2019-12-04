import 'jsdom-global/register';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount, shallow } from 'enzyme';
import About from '../src/About.jsx';


Enzyme.configure({ adapter: new Adapter() });

describe('About', () => {

    it('displays title of the section', () => {
        const wrapper = shallow(<About />, { disableLifecycleMethods: true });
        expect(wrapper.containsMatchingElement('About')).toBe(true);
    })

    it('readMore state is false when component first renders', () => {
        const wrapper = mount(<About />);
        expect(wrapper.state().readMore).toBe(false);
    })

    it('readMore state value is false when Read More is clicked', () => {
        const wrapper = mount(<About />);
        wrapper.find('Styled(Read)').simulate('click');
        expect(wrapper.state().readMore).toBe(false);
    })



    // it('reveals additional information when Show More is clicked', () => {
    //     const wrapper = shallow(<About />);
        
    // })

    // it('elements change colors', () => {
    //     const wrapper = shallow(<About />);
        
    // })
})

    