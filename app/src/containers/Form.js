/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Form from 'src/components/Form';
import { sendMessage, changeMessage } from 'src/store/reducer';

/**
 * Code
 */
const mapStateToProps = (state, ownProps) => ({
  inputValue: state.message,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  submit: (evt) => {
    evt.preventDefault();
    dispatch(sendMessage());
  },
  handleChangeValue: (evt) => {
    const { value } = evt.target;
    dispatch(changeMessage(value));
  },
});

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

/**
 * Export
 */
export default FormContainer;
