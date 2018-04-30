import PlaceTile from '../../../app/javascript/react/components/PlaceTile';
import { mount } from 'enzyme';
import React from 'react';

describe('PlaceTile', () => {
  let name,
      description,
      wrapper,
      onClick;

  beforeEach(() => {
    jasmineEnzyme();
    onClick = jasmine.createSpy('onClick');
    wrapper = mount(
      <PlaceTile
        name="Testname"
        description="Test Descrip"
        onClick={onClick}
      />
    );
  });
  it('should render an PlaceTile Component', () => {
    expect(wrapper.find(PlaceTile)).toBePresent();
  });

  it('should render a li tag with the specific props', () => {
    // console.log(wrapper.debug)
    // debugger;
    expect(wrapper.find('h2').text()).toEqual("Testname");
  });

  it('should render a p tag with the specific props', () => {
    expect(wrapper.find('p').text()).toEqual("Test Descrip")
  })

  it('should invoke the onClick function from props when clicked', () => {
    wrapper.find('li').simulate('click');
    // console.log(wrapper.debug)
    // debugger;
    expect(onClick).toHaveBeenCalled();
  });

  it ('Should have an onClick function', () => {
    expect(
      typeof wrapper.find('li').props().onClick === 'function'
    ).toBe(true);
  });
});
