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
      <SendMessage />
    </Panel>
  );
}

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(MESSAGE_SHAPE))
};

function SendMessage({}) {
  return (
    <div>
      <form className="form-inline">
        <div className="form-group mx-sm-3">
          <input type="text" className="form-control" id="inputPassword2" placeholder="Type your message here..."/>
        </div>
        <button type="submit" className="btn btn-success">Send</button>
      </form>
    </div>
  );
}