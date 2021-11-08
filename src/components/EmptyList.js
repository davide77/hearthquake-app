import React from 'react';

const EmptyList = ({ quakes }) => {
  return quakes.length === 0 ? (<p>not found</p>) : null;
};

export default EmptyList;
