import React from 'react';
import { Row } from 'react-bootstrap';

import PropTypes from 'prop-types';
import { widgetShape } from './shapes';

import Widget from '../../common/Widget';

export default function Widgets( { widgets } ) {
  return (
    <Row>
      <Widget iconSize='3x' 
              icon='shopping-bag' 
              iconClass='Dashboard-widgets-icon-1'
              spanText={ widgets.newOrders } 
              smallText='New orders' />
      
      <Widget iconSize='3x' 
              icon='comment-o' 
              iconClass='Dashboard-widgets-icon-2'
              spanText={ widgets.comments } 
              smallText='Comments' />
      
      <Widget iconSize='3x' 
              icon='user-o' 
              iconClass='Dashboard-widgets-icon-3'
              spanText={ widgets.newUsers } 
              smallText='New users' />
      
      <Widget iconSize='3x' 
              icon='drivers-license-o' 
              iconClass='Dashboard-widgets-icon-4'
              spanText={ widgets.newUsers } 
              smallText='Page views' />
    </Row>
  );
}

Widgets.propTypes = {
  widgets: PropTypes.shape(widgetShape),
};