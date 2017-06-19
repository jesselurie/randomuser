import { connect } from 'react-redux'
import Sort from '../components/Sort'
import {sort} from '../actions/actions'

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (value) => {
      dispatch(sort(value))
    }
  }
}
const SortUsers = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sort)

export default SortUsers
