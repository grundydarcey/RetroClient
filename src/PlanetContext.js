import React /*{ Component } */from 'react';

const PlanetContext = React.createContext({
  planets: [],
  setPlanets: () => {},
})

export default PlanetContext;

// export class PlanetProvider extends Component {
//   state = {
//     planets: [],
//   };

//   setPlanets = planets => {
//     this.setState({ planets })
//   };

//   render() {
//     const value = {
//       planets: this.state.planets,
//       setPlanets: this.setPlanets,
//     };
//     return (
//       <PlanetContext.Provider value={value}>
//         {this.props.children}
//       </PlanetContext.Provider>
//     )
//   }
// }