import fetch from 'isomorphic-fetch'
import X2JS from 'x2js'

const proxyUrl = 'https://cors-anywhere.herokuapp.com/'



//network call to request tweets from url
export const REQUEST = 'REQUEST'
function request() {
  return {
    type: REQUEST,
  }
}

export const RESPONSE = 'RESPONSE'
function response(data){
  return {
    type: RESPONSE,
    users: data,
    recievedAt: Date.now(),
  }
}

export const SORT = 'SORT'
export function sort(firstorlast){
  return {
    type: SORT,
    value: firstorlast,
  }
}

export const SEARCH = 'SEARCH'
export function search(name){
  return {
    type: SEARCH,
    value: name,
  }
}

export function fetchUsers(){
  return function(dispatch){
   dispatch(request())
   return fetch(proxyUrl + `https://randomuser.me/api/?results=50`)
      .then(response => response.json())
      .then(doc => {
        dispatch(response(doc))
      })
  }
}
