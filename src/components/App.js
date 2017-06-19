import React, { Component } from 'react';
import Search from './Search';
import SortUsers from '../containers/SortUsers'
import ShowUsers from '../containers/ShowUsers'
import SearchUser from '../containers/SearchUser'

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Top">
          <SearchUser/>
          <SortUsers/>
        </div>
        <div className="Middle">
          <ShowUsers/>
        </div>
      </div>
    );
  }
}

export default App;
