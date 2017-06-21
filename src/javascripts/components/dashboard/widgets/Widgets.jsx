import React from 'react';

import { Row, Col } from 'react-bootstrap';
import { Icon } from 'react-fa'

export default function Widgets( { widgets } ) {
  
  return (
      <Row>
        <Col lg={3} md={3} sm={6} xs={12} >
          <div className='Dashboard-widgets'> 
            <div>
              <Col md={6} className='Dashboard-widgets-icon-1'>
                <Icon name="shopping-bag" size='3x' inverse/>
              </Col>
              <Col md={6} className='Dashboard-widgets-number'>
                <h3>
                  <span>{ widgets.newOrders }</span>
                </h3>
                <small>New orders</small>
              </Col>
            </div>
          </div>
        </Col>
        
        <Col lg={3} md={3} sm={6} xs={12} >
          <div className='Dashboard-widgets'>
            <div>
              <Col md={6} className='Dashboard-widgets-icon-2'>
                <Icon name="comment-o" size='3x' inverse/>
              </Col>
              <Col md={6} className='Dashboard-widgets-number'>
                <h3>
                  <span>{ widgets.comments }</span>
                </h3>
                <small>Comments</small>
              </Col>
            </div>
          </div>
        </Col>
        
        <Col lg={3} md={3} sm={6} xs={12} >
          <div className='Dashboard-widgets'>
            <div>
              <Col md={6} className='Dashboard-widgets-icon-3'>
                <Icon name="user-o" size='3x' inverse/>
              </Col>
              <Col md={6} className='Dashboard-widgets-number'>
                <h3>
                  <span>{ widgets.newUsers }</span>
                </h3>
                <small>New users</small>
              </Col>
            </div>
          </div>
        </Col>
        
        <Col lg={3} md={3} sm={6} xs={12} >
          <div className='Dashboard-widgets'>
            <Row>
              <Col md={6} className='Dashboard-widgets-icon-4'>
                <Icon name="drivers-license-o" size='3x' inverse/>
              </Col>
              <Col md={6} className='Dashboard-widgets-number'>
                <h3>
                  <span>{ widgets.newUsers }</span>
                </h3>
                <small>Page views</small>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
  );
}
Widgets.propTypes = {

};