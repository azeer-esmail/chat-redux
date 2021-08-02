import React, {Component} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {createMessage, setMessages} from '../actions'

class messageForm extends Component{
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    }
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.setState({
        text: ""
      });
      this.props.createMessage(this.props.selectedChannel, this.props.author, this.state.text)
      .then(data => this.props.setMessages(this.props.selectedChannel))
    }
  }

  handleUpdate = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  handleClick = (event) => {
    this.setState({
      text: ""
    });
    this.props.createMessage(this.props.selectedChannel, this.props.author, this.state.text)
    .then(data => this.props.setMessages(this.props.selectedChannel))
    // this.props.setMessages(this.props.selectedChannel);
  }

  render() {
    return(
      <div className="message-form">
        <input type="text" className="text-input" value={this.state.text} onKeyPress={this.handleKeyPress} onChange={this.handleUpdate}/>
        <button className="send-btn" onClick={this.handleClick} >Send</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {createMessage: createMessage,
      setMessages: setMessages},
    dispatch
  );
}

function mapReduxStateToProps(state){
  return {
    selectedChannel: state.selectedChannel,
    author: state.currentUser,
    messages: state.messages
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(messageForm);
