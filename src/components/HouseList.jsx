import React, { useEffect } from 'react';

const HouseList = () => {
  useEffect(() => {
    loadHouses();
  }, [loadHouses]);

  return(
    <div>
      House List
    </div>
  )
}

export default HouseList;