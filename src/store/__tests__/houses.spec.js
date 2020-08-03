import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import housesReducer from '../houses/reducers';
import { loadHouses } from '../houses/actions';

describe('houses', () => {
  describe('loadHouses action', () => {
    it('stores the houses', async () => {
      const records = [
        { id: 1, name: 'Apartment', description: 'Really nice appartment', price: 550.00 },
        { id: 2, name: 'House', description: 'Really nice house', price: 900.00 }
      ];

      const api = {
        loadHouses: () => Promise.resolve(records),
      };

      const initialState = {
        records: [],
      };

      const store = createStore(
        housesReducer,
        initialState,
        applyMiddleware(thunk.withExtraArgument(api)),
      );

      await store.dispatch(loadHouses());

      expect(store.getState().records).toEqual(records);
    });
  });
});