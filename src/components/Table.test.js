import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';
import users from './users'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Table users={users.results}/>, div);
});
