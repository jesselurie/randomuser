import { connect } from 'react-redux'
import Table from '../components/Table'

function sortByLastORFirst(firstorlast,data) {
  return  data.sort((a,b)=> {
    var nameA = a.name[firstorlast].toUpperCase(); // ignore upper and lowercase
    var nameB = b.name[firstorlast].toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0
  })
}

function search(value,data){
  return data.filter((user)=> {
    var fullName = user.name.first.toUpperCase() + user.name.last.toUpperCase()
    return fullName.includes(value.toUpperCase())
  });
}

const mapStateToProps = (state) => {
  if (state.reducer.search === true){
    return {
      filter: state.reducer.filter,
      users: search(state.reducer.searchWord, state.reducer.users),
    }
  }
  return {
    filter: state.reducer.filter,
    users: sortByLastORFirst(state.reducer.filter, state.reducer.users),
  }
}

const ShowUsers = connect(
  mapStateToProps,
)(Table)

export default ShowUsers
