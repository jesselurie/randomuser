import React, { Component } from 'react';

import './Title.css';

class Title extends Component {
  constructor(props){
    super(props)
    // window.onclick = (e)=>{console.log(e)}
    // window.onmouseover =  (e)=>{console.log(e.target)}
    String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    }
  }

  render() {
    return (
      <div className="title">
        <h1>{this.props.title.capitalize()}</h1>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Title;
