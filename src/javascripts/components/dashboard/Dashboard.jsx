import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';

import PropTypes from 'prop-types';
import { dashboardShape } from './shapes';

import store from '../stores/redux_store';
import * as actions from '../reducers/dashboard';

import logo from '../../../images/logo.png';
import '../../../stylesheets/Dashboard.css';

import Widgets from './widgets/Widgets';

class Dashboard extends Component {
  static propTypes = {
    // redux dispatch
    dispatch: PropTypes.func,
    
    // redux state
    dashboard: PropTypes.shape(dashboardShape),
  };

  componentWillMount() {
    this.props.dispatch(actions.fetchWidgets());
    this.props.dispatch(actions.fetchPageViews());
    this.props.dispatch(actions.fetchMessages())
  }

  render() {
    const { widgets, pageViews, messages } = this.props.dashboard;
    
    return (
      <div>
        <div className="Dashboard">
          <div className="Dashboard-header">
            <img src={ logo } alt='logo'/>
          </div>

          <div className="Dashboard-content">

            <h1>Dashboard</h1>
            <Widgets widgets={ widgets  }/>
          </div>
        </div>
      </div> 
    );
  }
}

const mapStateToProps = (state) => { return state.dashboard.toJS(); }; 
function mapDispatchToProps(dispatch) { return { ...actions, dispatch }; } 
const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard); 

export default function Container(props) { 
  return <Provider store={store}><DashboardContainer {...props}/></Provider>; 
}
