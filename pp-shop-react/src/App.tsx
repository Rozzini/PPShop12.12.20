import React, { Component } from 'react';

import ProductCards from './components/ProductCards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="container">
            <h1>Starships For Sale </h1>
            <p className="slogan">
              No matter what's your side on the force, we sell you the starship
              of your dreams.
            </p>
          </div>
        </header>
        <div className="container">
          <ProductCards />
        </div>
      </div>
    );
  }
}

export default App;