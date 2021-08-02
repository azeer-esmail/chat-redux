import React from 'react';
import ChannelList from '../containers/channel_list.jsx'
import MessageList from '../containers/message_list.jsx'
import MessageForm from '../containers/message_form.jsx'


const App = () => {
  return (
    <div className="app">
      <ChannelList />
      <div style={{width: '70%', height: '100%'}}>
        <MessageList/>
        <MessageForm />
      </div>
    </div>
  );
};

export default App;
