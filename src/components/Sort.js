import React, { Component,PropTypes } from 'react';

import './Sort.css';
//By default the users should be sorted by their last name. Using the radio button they
//can be sorted by their first name as well.
class Sort extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="sort">
        <p>Sort By</p>
        <label><input onClick={(e)=>{this.props.onClick(e.target.value)}} type="radio" name="sortby" value="first" />First Name</label>
        <label><input onClick={(e)=>{this.props.onClick(e.target.value)}} type="radio" name="sortby" value="last" defaultChecked/>Last Name</label><br/>
      </div>
    );
  }
}


Sort.propTypes = {
  onClick: PropTypes.func
}

export default Sort;
