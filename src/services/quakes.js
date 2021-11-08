import 'isomorphic-fetch';
import { quakesEndpoint } from '../config/endpoints';
import { formatData } from '../models';

const fetchQuakes = () => fetch(quakesEndpoint);

const parseQuakes = (response, reject) => response.json()
  .then((json) => {
    let quakes = [];
    if (json && json.features) {
      quakes = json.features.map(formatData);
    }
    return quakes;
  });

export { fetchQuakes, parseQuakes };
