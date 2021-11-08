import React from 'react';
import Quake from './Quake';

const Quakes = ({ quakes }) => (
  <ul>
    { quakes.map(Quake) }
  </ul>
);

export default Quakes;
