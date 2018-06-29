/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Message from 'src/components/Messages/Message';

/**
 * Code
 */
const mapStateToProps = (state, ownProps) => ({
  own: state.settings.user === ownProps.user,
});

const mapDispatchToProps = null;

const MessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Message);

/**
 * Export
 */
export default MessageContainer; // composant React
