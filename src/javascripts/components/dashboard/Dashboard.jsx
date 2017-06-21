import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';

import { Row, Col } from 'react-bootstrap';
import { Icon } from 'react-fa'

import PropTypes from 'prop-types';
import { dashboardShape } from './shapes';

import store from '../stores/redux_store';
import * as actions from '../reducers/dashboard';

import logo from '../../../images/logo.png';
import '../../../stylesheets/Dashboard.css';

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
            <img src={ logo }/>
          </div>

          <div className="Dashboard-content">

            <h1>Dashboard</h1>
            <Row>
              <Col lg={3} md={3} sm={6} xs={12} >
                <div className='Dashboard-widgets'> 
                  <Row>
                    <Col md={4} className='Dashboard-widgets-icon-1'>
                      <Icon name="shopping-bag" size='3x' inverse/>
                    </Col>
                    <Col md={8} className='Dashboard-widgets-number'>
                      <h3>
                        <span>{ widgets.newOrders }</span>
                      </h3>
                      <small>New Orders</small>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={3} md={3} sm={6} xs={12} >
                <div className='Dashboard-widgets'>
                  <Row>
                    <Col md={4} className='Dashboard-widgets-icon-2'>
                      <Icon name="comment-o" size='3x' inverse/>
                    </Col>
                    <Col md={8} className='Dashboard-widgets-number'>
                      <h3>
                        <span>{ widgets.comments }</span>
                      </h3>
                      <small>Comments</small>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={3} md={3} sm={6} xs={12} >
                <div className='Dashboard-widgets'>
                  <Row>
                    <Col md={4} className='Dashboard-widgets-icon-3'>
                      <Icon name="user-o" size='3x' inverse/>
                    </Col>
                    <Col md={8} className='Dashboard-widgets-number'>
                      <h3>
                        <span>{ widgets.newUsers }</span>
                      </h3>
                      <small>New Users</small>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={3} md={3} sm={6} xs={12} >
                <div className='Dashboard-widgets'>
                  <Row>
                    <Col md={4} className='Dashboard-widgets-icon-4'>
                      <Icon name="drivers-license-o" size='3x' inverse/>
                    </Col>
                    <Col md={8} className='Dashboard-widgets-number'>
                      <h3>
                        <span>{ widgets.newUsers }</span>
                      </h3>
                      <small>Page views</small>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div> 
    );
  }
}

const mapStateToProps = (state) => { return state.dashboard.toJS(); }; 
function mapDispatchToProps(dispatch) { return { ...actions, dispatch }; } 
const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard); 

export default function Container(props) { return <Provider store={store}><DashboardContainer {...props}/></Provider>; }