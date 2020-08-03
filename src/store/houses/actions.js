export const STORE_HOUSES = 'STORE_HOUSES';

export const loadHouses = () => (dispatch, getState, api) => {
  api.loadHouses().then(records => {
    dispatch(storeHouses(records));
  });
};

const storeHouses = records => ({
  type: STORE_HOUSES,
  records,
});