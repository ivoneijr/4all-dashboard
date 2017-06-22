import React from 'react';
import { Panel } from 'react-bootstrap';
import { Icon } from 'react-fa';

import PropTypes from 'prop-types';
import { MESSAGE_SHAPE } from '../shapes';

import ChatElement from './ChatElement';

export default function Messages({ messages }) {
  return (
    <Panel>
      <div>
        <Icon name='comments-o' size='3x'/>
      </div>
      { messages.map((message, index) =>  <ChatElement key={index} message={message}/>) }
    </Panel>
  );
}

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(MESSAGE_SHAPE))
};
