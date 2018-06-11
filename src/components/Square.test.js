import React from 'react';
import Square from './Square';

describe('Squre test', () => {

  it('should render correctly', () => {
    const wrapper = shallow(<Square black={true}/>);
    expect(wrapper).toMatchSnapshot();
    const div = wrapper.find('div');
    expect(div.prop('style')).toHaveProperty('backgroundColor', 'black');

  })

  it('should render div with white background', () => {
    const wrapper = shallow(<Square black={false}/>);
    expect(wrapper).toMatchSnapshot();
    const div = wrapper.find('div');
    expect(div.prop('style')).toHaveProperty('backgroundColor', 'white');

  })
})
