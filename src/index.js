import React from 'react';
import RenderApp from './containers/RenderApp';
import NotFound from './components/NotFound'
import reducers from './reducers/reducers'
import {fetchUsers} from './actions/actions'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import {Switch, Route } from 'react-router'
// import {loadState, saveState} from './localStorage'
//https://randomuser.me/api/?results=50
import './index.css';

const history = createHistory()
const historyMiddleware = routerMiddleware(history)
const loggerMiddleware = createLogger()
const store = createStore(
  reducers,
  applyMiddleware(
    historyMiddleware,
    thunkMiddleware,
    loggerMiddleware
  )
)

store.dispatch(fetchUsers())

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
          <Route exact path="/app" component={RenderApp}/>
          <Route component={NotFound}/>
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
