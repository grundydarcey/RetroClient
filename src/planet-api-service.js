import config from './config';

const PlanetAPIService = {
  getAllPlanets() {
    return fetch(`${config.API_ENDPOINT}/planets`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        //if (!res.ok) return res.json().then((e) => Promise.reject(e));
        //return res.json();
        res.text()
      })
      .then(text => console.log(text))
      ;
  }
}

export default PlanetAPIService;