import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Q from '../components/Q';
import * as QActions from '../actions/q';

function mapStateToProps(state) {
  return {
    config: state.config,
    q: state.q
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(QActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Q);
