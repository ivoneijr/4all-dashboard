import Immutable from 'immutable';
import $         from 'jquery';
import { API_URL } from '../../../config/constants';

// Constants for the operations that can change the store.
const SET_ERROR            = "dashboard/SET_ERROR",
      UPDATE_WIDGETS       = "dashboard/UPDATE_WIDGETS",
      UPDATE_PAGE_VIEWS    = "dashboard/UPDATE_PAGE_VIEWS",
      UPDATE_NEW_MESSAGE   = "dashboard/UPDATE_MESSAGES",
      UPDATE_MESSAGES      = "dashboard/UPDATE_NEW_MESSAGE",
      ADD_NEW_MESSAGE      = "dashboard/ADD_NEW_MESSAGE";

const DEFAULT_STATE = Immutable.fromJS({
  dashboard: {
    error: null,
    widgets: {
      newOrders: null,
      comments: null,
      newUsers: null,
      pageViews: null
    },
    pageViews: [],
    messages: {
      new: '',
      all:[]
    },
  }
});

// Indicates that the state is loading.
const LOADING_STATE = Immutable.fromJS({status: 'loading'});

// Our reducer. It must interpret the action and return a new state.
export default function reducer(state = DEFAULT_STATE, action = {}) {
  switch (action.type) {
    case SET_ERROR:
      return state.set('error', Immutable.fromJS(action.error));

    case UPDATE_WIDGETS:
      return state.setIn(['dashboard', 'widgets'], Immutable.fromJS(action.data));

    case UPDATE_PAGE_VIEWS:
      return state.setIn(['dashboard', 'pageViews'], Immutable.fromJS(action.data));

    case UPDATE_MESSAGES:
      return state.setIn(['dashboard', 'messages', 'all'], Immutable.fromJS(action.data));
    
    case UPDATE_NEW_MESSAGE:
      return state.setIn(['dashboard', 'messages', 'new'], Immutable.fromJS(action.data));
    
    case ADD_NEW_MESSAGE:
      const newMessage = {
        userName: "Mary Doe",
        portrait: "http://dev.4all.com:3050/imgs/profile2.png",
        message: state.toJS().dashboard.messages.new,
        displayPortraitLeft: false,
        time: "secconds mins ago",
      };
      return state.updateIn(['dashboard', 'messages', 'all'], messages => messages.push(newMessage));

    default:
      return state;
  }
}

/**
 * BASIC ACTION CREATORS
 */
export function setError(error) {
  return { type: SET_ERROR, error };
}

function updateWidgets(data) {
  return { type: UPDATE_WIDGETS, data }
}

function updatePageViews(data) {
  return { type: UPDATE_PAGE_VIEWS, data }
}

function updateMessages(data) {
  return { type: UPDATE_MESSAGES, data }
}

function updateNewMessage(data) {
  return { type: UPDATE_NEW_MESSAGE, data };
}

function addNewMessage() {
  return { type: ADD_NEW_MESSAGE };
}

/**
 * THUNK ACTION CREATORS
 */
export function fetchWidgets() {
  return function(dispatch) {
    dispatch(updateWidgets(LOADING_STATE));

    $.ajax({ url: `${API_URL}/widgets`, contentType: 'application/json', dataType: 'json', type: 'GET' })
        .then(data => dispatch(updateWidgets(data)))
        .fail(e => dispatch(setError(e)));
  };
}

export function fetchPageViews() {
  return function(dispatch) {
    dispatch(updatePageViews([LOADING_STATE]));

    $.ajax({ url: `${API_URL}/pageViews`, contentType: 'application/json', dataType: 'json', type: 'GET' })
        .then(data => dispatch(updatePageViews(data)))
        .fail(e => dispatch(setError(e)));
  };
}

export function fetchMessages() {
  return function(dispatch) {
    dispatch(updateMessages([LOADING_STATE]));

    $.ajax({ url: `${API_URL}/messages`, contentType: 'application/json', dataType: 'json', type: 'GET' })
        .then(data => dispatch(updateMessages(data)))
        .fail(e => dispatch(setError(e)));
  };
}

export function fetchNewMessage(input_value) {
  return function(dispatch) {
    dispatch(updateNewMessage(input_value));
  }
}

export function insertNewMessage() {
  return function(dispatch) {
    dispatch(addNewMessage());
    dispatch(updateNewMessage(''));
  }
}