import React from 'react';
import { render } from '@testing-library/react';
import HouseList from '../HouseList';

describe('HouseList', () => {
  const houses = [
    { id: 1, name: 'Apartment', description: 'Really nice appartment', price: 550.00 },
    { id: 2, name: 'House', description: 'Really nice house', price: 900.00 }
  ];
  let loadHouses;
  let context;
  
  beforeEach(() => {
    loadHouses = jest.fn().mockName('loadHouses');

    context = render(
      <HouseList 
        loadHouses={loadHouses}
        houses={houses}
      />,
    );
  });

  it('loads houses on first render', () => {
    expect(loadHouses).toHaveBeenCalled();
  });

  it('display the houses', () => {
    const { queryByText } = context;

    expect(queryByText('Apartment')).not.toBeNull();
    expect(queryByText('House')).not.toBeNull();
  });
});