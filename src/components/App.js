import React, { Component } from 'react';
import Quakes from '../components/Quakes';
import EmptyList from '../components/EmptyList';
import Filter from '../components/Filter';
import { fetchQuakes, parseQuakes } from '../services/quakes';

class App extends Component {
  
  constructor() {
    super();
    this.allQuakes = [];
    this.state = { quakes: [] };
    this.cacheQuakes = this.cacheQuakes.bind(this);
    this.setQuakes = this.setQuakes.bind(this);
  }

  componentDidMount() {
    fetchQuakes()
      .then(parseQuakes)
      .then((quakes) => {
        this.cacheQuakes(quakes);
        this.setQuakes(quakes);
      })
      .catch(this.handleError);
  }

  cacheQuakes(quakes) {
    this.allQuakes = quakes.map(x => x);
  }

  setQuakes(quakes) {
    this.setState({ quakes: quakes });
  }

  handleError(error) {
    // LOG ERRORS
  }

  render() {
    return (
      <div>
        <h2>Where Earthquakes have happened</h2>
        <Filter 
          filterName="mag" 
          allQuakes={this.allQuakes} 
          listedQuakes={this.state.quakes} 
          setQuakes={this.setQuakes}
        />
        <Filter 
          filterName="magType" 
          allQuakes={this.allQuakes} 
          listedQuakes={this.state.quakes} 
          setQuakes={this.setQuakes}
        />
        <Quakes quakes={this.state.quakes} />
        <EmptyList quakes={this.state.quakes} />
      </div>
    );
  }
}

export default App;
