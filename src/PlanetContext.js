import React from 'react';

const PlanetContext = React.createContext({
  planets: [],
  setPlanets: () => {},
  submittedDate: [],
})

export default PlanetContext;