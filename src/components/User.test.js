import React from 'react';
import ReactDOM from 'react-dom';
import User from './User';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<User lastname="test" firstname="test" dob="01-12-03 12:34:40:11" city="rack"/>, div);
});
