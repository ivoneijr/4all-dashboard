import React,  { Component } from 'react';
import { Panel, FormGroup, FormControl, Button, InputGroup } from 'react-bootstrap';
import { Icon } from 'react-fa';

import PropTypes from 'prop-types';
import { MESSAGE_SHAPE } from '../shapes';

import ChatElement from './ChatElement';

import * as actions from '../../reducers/dashboard';

export default class Messages extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    all: PropTypes.arrayOf(PropTypes.shape(MESSAGE_SHAPE)),
    inputValue: PropTypes.string
  };

  render() {
    const { all, dispatch, inputValue } = this.props;
    const chatElements = all.map((message, index) =>  <ChatElement key={ index } message={ message } />);
    return (
      <Panel>
        <div> <Icon name='comments-o' size='3x'/> </div>
        { chatElements }
        <SendMessage dispatch={ dispatch } inputValue={ inputValue }/>
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
                    onClick={ (event) => addMessage(event, inputValue, dispatch) }> Send </Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
    </div>
  );
}

SendMessage.propTypes = {
  dispatch: PropTypes.func,
  newMessage: PropTypes.string,
};

function handleInputChange(event, dispatch) {
  dispatch(actions.fetchNewMessage(event.target.value));
}

function addMessage(event, newMessage, dispatch) {
  dispatch(actions.insertNewMessage(event.target.value));
}