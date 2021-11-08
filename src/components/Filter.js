import React from 'react';

const Filters = ({ filterName, allQuakes, listedQuakes, setQuakes }) => {

  let filterValue = 0;

  const filterMethod = {
    mag: quake => quake.mag === filterValue/1,
    magType: quake => quake.magType === filterValue,
  }

  const handleChange = (e) => {
    filterValue = e.target.value;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const shortList = allQuakes.filter(filterMethod[filterName]);
    setQuakes(shortList);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="magnitude">Filter by {filterName}: </label>
      <input id="magnitude" type="text" onChange={handleChange} />
      <button>Filter</button>
    </form>
  );
};

export default Filters;
