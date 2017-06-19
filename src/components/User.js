import React, { Component,PropTypes } from 'react';

import './User.css';

class User extends Component {
  constructor(props){
    super(props);
    String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    }
  }

  render() {
    return (
      <div  className="user">
        <div className="thumbnail" onClick={(e)=>this.props.onClick(e)}>
          <img data-id={this.props.userkey}  src={this.props.thumbnail}></img>
        </div>
        <div className="name">
          <font size="4"><b>{this.props.firstname.capitalize() +" "+ this.props.lastname.capitalize()}</b> </font>
        </div>
        <div className="dob">
          <p>DOB: {this.props.dob.slice(0,-8)}</p>
        </div>
        <div className="city">
          <p>City: {this.props.city.capitalize()}</p>
        </div>
      </div>
    );
  }
}

User.propTypes = {
  thumbnail: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  dob: PropTypes.string,
  city:PropTypes.string,
  onClick: PropTypes.func,
  userkey: PropTypes.string
}

export default User;
