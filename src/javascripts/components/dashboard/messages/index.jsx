import React,  { Component } from 'react';
import { Panel, FormGroup, FormControl, Button, InputGroup } from 'react-bootstrap';
import { Icon } from 'react-fa';

import PropTypes from 'prop-types';
import { MESSAGES_SHAPE } from '../shapes';

import ChatElement from './ChatElement';

import * as actions from '../../reducers/dashboard';

export default class Messages extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    messages: PropTypes.shape(MESSAGES_SHAPE),
    inputValue: PropTypes.string
  };

  render() {
    const { messages, dispatch } = this.props;
    const chatElements = messages.all.map((message, index) =>  <ChatElement key={ index } message={ message } />);
    
    return (
      <Panel>
        <div> <Icon name='comments-o' size='3x'/> </div>
        { chatElements }
        <SendMessage dispatch={ dispatch } inputValue={ messages.new }/>
      </Panel>
    );
  }
}

function SendMessage({ dispatch, inputValue }) {
  return (
    <div>
      <FormGroup>
        <InputGroup>
          <FormControl type="text" placeholder='Type your message here...' 
                       value={inputValue}
                       onChange={ (event) => handleInputChange(event, dispatch) }/>
          <InputGroup.Button>
            <Button bsStyle="success" 
                    onClick={ (event) => addMessage(event, dispatch, inputValue) }> Send </Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
    </div>
  );
}

SendMessage.propTypes = {
  dispatch: PropTypes.func,
  inputValue: PropTypes.string,
};

function handleInputChange(event, dispatch) {
  dispatch(actions.fetchNewMessage(event.target.value));
}

function addMessage(event, dispatch, inputValue) {
  dispatch(actions.insertNewMessage(inputValue));
}