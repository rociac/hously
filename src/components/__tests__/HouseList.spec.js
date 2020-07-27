import React from 'react';
import { render } from '@testing-library/react';
import HouseList from '../HouseList';

describe('HouseList', () => {
  it('loads houses on first render', () => {
    const loadHouses = jest.fn().mockName('loadHouses');
    render(<HouseList loadHouses={loadHouses} />);
    expect(loadHouses).toHaveBeenCalled();
  });
});