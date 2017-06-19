import { connect } from 'react-redux'
import App from '../components/App'

const mapStateToProps = (state) => {
  return {
    users: state.reducer.users,
    filter: state.reducer.filter,
  }
}

const RenderApp = connect(
  mapStateToProps,
)(App)

export default RenderApp
