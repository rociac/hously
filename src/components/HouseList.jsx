import React, { useEffect } from 'react';
import { loadHouses } from '../store/houses/actions';
import { connect } from 'react-redux';

export const HouseList = ({loadHouses, houses}) => {
  useEffect(() => {
    loadHouses();
  }, [loadHouses]);

  return (
    <ul>
      {houses.map((house) => (
        <li key={house.id}>{house.name}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  houses: state.houses.records,
});

const mapDispatchToProps = { loadHouses };

export default connect(mapStateToProps, mapDispatchToProps)(HouseList);