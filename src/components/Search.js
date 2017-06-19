import React, { Component,PropTypes } from 'react';
import './Search.css';
//        <span className="fa fa-search"></span>
//The search bar should respond immediately and filter the displayed list of users,
//showing only the ones whose names contain the search string.

class Search extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="search">
        <input onChange={(e)=>this.props.onChange(e.target.value)} placeholder="Search..."/>
      </div>
    );
  }
}

Search.propTypes = {
  onChange: PropTypes.func,
}

export default Search;
