import React /*{ Component } */from 'react';

const PlanetContext = React.createContext({
  planets: [],
  setPlanets: () => {},
  //submittedFutureReport: false,
  submittedDate: [],
})

export default PlanetContext;