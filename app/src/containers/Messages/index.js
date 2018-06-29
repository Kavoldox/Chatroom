/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Messages from 'src/components/Messages';

/**
 * Code
 */
const mapStateToProps = (state, ownProps) => ({
  messages: state.messages,
});

const mapDispatchToProps = null;

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Messages);

/**
 * Export
 */
export default MessagesContainer;
