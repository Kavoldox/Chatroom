/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import App from 'src/components/App';

/**
 * Code
 */
const mapStateToProps = (state, ownProps) => ({
  title: state.title,
});

const mapDispatchToProps = null;

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

/**
 * Export
 */
export default AppContainer;
