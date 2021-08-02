import React, {Component} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Message from '../components/message.jsx';
import {setMessages} from '../actions';

class MessageList extends Component{
  constructor(props) {
    super(props);
    this.startFetch = null
  }

  renderList = () => {
    return (
      this.props.messages.map( message => <Message key={message.user + message.created_at} author={message.author} content={message.content} created_at={message.created_at} />)
    )
  }

  componentWillMount () {
    this.props.setMessages();
  }


  componentWillUnmount() {
    clearInterval(this.startFetch)
  }


  render() {
    return(
      <div className="message-list" ref={this.myRef} >
        {this.renderList()}
      </div>
    );
  }

  componentDidMount() {
    this.startFetch = setInterval(() => {
        this.props.setMessages(this.props.selectedChannel)
      },5000)
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {setMessages: setMessages},
    dispatch
  );
}

function mapReduxStateToProps(state){
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps, null, {forwardRef: true})(MessageList);
