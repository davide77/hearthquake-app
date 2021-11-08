import React from 'react';

const Quake = ({ id, place, mag, magType }) => (
  <li key={id}>
    {id} : {place} : {mag} : {magType}
  </li>
);

export default Quake;
