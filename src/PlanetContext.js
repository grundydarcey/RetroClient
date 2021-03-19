import React /*{ Component } */from 'react';

const PlanetContext = React.createContext({
  planets: [],
  setPlanets: () => {},
})

export default PlanetContext;