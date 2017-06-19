import { connect } from 'react-redux'
import Search from '../components/Search'
import {search} from '../actions/actions'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (name) => {
      dispatch(search(name))
    }
  }
}

const SearchUser = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search)

export default SearchUser
