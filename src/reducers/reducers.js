import {combineReducers} from 'redux';
import { routerReducer  } from 'react-router-redux'
// import { loadState } from '../localStorage'
import {
  REQUEST,
  RESPONSE,
  SORT,
  SEARCH
} from '../actions/actions';


function reducer(state={users:[],filter:"last", search:false},action){
  switch (action.type) {
    case REQUEST:
      return Object.assign({},state,{users:state.users})
    case RESPONSE:
      return Object.assign({},state,{users:action.users.results})
    case SORT:
      return Object.assign({},state,{users:state.users,filter:action.value, search:false})
    case SEARCH:
      return Object.assign({},state,{users:state.users, filter:state.filter,searchWord:action.value,search:true})
    default:
      return state
  }
}



const reducers = combineReducers({
  reducer: reducer,
  router: routerReducer,
})


export default reducers;
