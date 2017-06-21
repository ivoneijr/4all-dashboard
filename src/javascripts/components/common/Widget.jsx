import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { Icon } from 'react-fa';

/**
 * A component to render a widget.
 */
export default function Widget({ icon, iconSize, iconClass, spanText, smallText }) {
  return (
    <Col lg={3} md={3} sm={6} xs={12} className='w-col'>
      <div className='Dashboard-widgets'> 
        <div>
          <Col md={6} className={ iconClass }>
            <Icon name={ icon } size={ iconSize } inverse/>
          </Col>
          <Col md={6} className='Dashboard-widgets-number'>
          <h3><span> { spanText } </span></h3>
          <small>{ smallText }</small>
          </Col>
        </div>
      </div>
    </Col>
  );
}

Widget.propTypes = {
  icon: PropTypes.string,
  iconSize: PropTypes.string,
  iconClass: PropTypes.string,
  spanText: PropTypes.string,
  smallText: PropTypes.string
};