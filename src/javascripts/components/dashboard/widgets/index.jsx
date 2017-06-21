import React from 'react';
import { Row } from 'react-bootstrap';

import PropTypes from 'prop-types';
import { WIDGET_SHAPE } from '../shapes';

import Widget from '../../common/Widget';

export default function Widgets( { widgets } ) {
  return (
    <Row>
      <Widget iconSize='3x' 
              icon='shopping-bag' 
              iconClass='w-orders'
              spanText={ widgets.newOrders } 
              smallText='New orders' />
      
      <Widget iconSize='3x' 
              icon='comment-o' 
              iconClass='w-comments'
              spanText={ widgets.comments } 
              smallText='Comments' />
      
      <Widget iconSize='3x' 
              icon='user-o' 
              iconClass='w-users'
              spanText={ widgets.newUsers } 
              smallText='New users' />
      
      <Widget iconSize='3x' 
              icon='drivers-license-o' 
              iconClass='w-views'
              spanText={ widgets.newUsers } 
              smallText='Page views' />
    </Row>
  );
}

Widgets.propTypes = {
  widgets: PropTypes.shape(WIDGET_SHAPE),
};