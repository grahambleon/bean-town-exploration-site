import PlaceList from '../../../app/javascript/react/containers/PlaceList';
import { mount } from 'enzyme';
import React from 'react';
import fetchMock from 'fetch-mock'

describe('PlaceList', () => {
  let wrapper;
  let places;

  beforeEach(() => {
    places = [
      {id: 1, name: "Testname"}
    ]
    fetchMock.get('/api/v1/places.json', {
      status: 200,
      body: places
    });

    wrapper = mount(
      <PlaceList />
    );
  });
  afterEach(fetchMock.restore)

  describe('listing', () => {
    it('renders a div', () => {
      expect(wrapper.find('div')).toBePresent()
      expect(wrapper.find('h1').text()).toEqual('Places to Visit!')
    });

  });

  it('should render an PlaceList Container', () => {
    expect(wrapper.find(PlaceList)).toBePresent();
    wrapper.setState({ placeSelected: true });
  });

  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({
      places: [],
      placeSelected: null
    });
  });


});
