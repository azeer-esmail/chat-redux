// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware ,createStore, combineReducers } from 'redux';
import logger from 'redux-logger'
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

import channelsReducer from './reducers/channels_reducer'
import messagesReducer from './reducers/messages_reducer'
import selectChannelReducer from './reducers/select_channel_reducer'
import usersReducer from './reducers/users_reducer'
import createMessageReducer from './reducers/create_message_reducer'

// State and reducers
const reducers = combineReducers({
  channels: channelsReducer,
  messages: messagesReducer,
  selectedChannel: selectChannelReducer,
  currentUser: usersReducer,
  createMessage: createMessageReducer
});

const initialState = {
  messages: [],
  channels: [ 'general', 'react', 'paris' ],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general',
};

const middlewares = applyMiddleware(logger, reduxPromise)

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
