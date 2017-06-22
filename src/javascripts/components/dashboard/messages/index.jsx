import React from 'react';
import { Media, Panel } from 'react-bootstrap';

import PropTypes from 'prop-types';
import { MESSAGE_SHAPE } from '../shapes';

export default function Messages( { messages } ) {

  return (
    <Panel>
      <div>
        <Media>
        <Media.Left>
            <img width={64} height={64} src="http://dev.4all.com:3050/imgs/profile2.png" alt="oss" className='mg-rounded'   />
          </Media.Left>
          <Media.Body>
            <Media.Heading>Media Heading</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
          </Media.Body>
        </Media>
        <Media>
          <Media.Body>
            <Media.Heading>Media Heading</Media.Heading>
            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
          </Media.Body>
          <Media.Right>
            <img width={64} height={64} src="http://dev.4all.com:3050/imgs/profile1.jpg" alt="oss"/>
          </Media.Right>
        </Media>
      </div>
    </Panel>
  );
}

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(MESSAGE_SHAPE))
};
