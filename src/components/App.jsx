import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/index';
import HouseScreen from './HouseScreen';

function App() {
  return (
    <Provider store={store}>
      <HouseScreen />
    </Provider>
  );
}

export default App;
