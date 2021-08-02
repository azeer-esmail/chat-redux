import React, {Component} from 'react';

class Message extends Component{
  constructor (props){
    super(props)
    this.msgList = document.querySelector('.message-list')
  }

  componentDidMount() {
    this.msgList.scrollTop = this.msgList.scrollHeight
  }

  render() {
    return(
      <div className="message">
        <div style={{display:'flex'}}>
          <div className="message-user">{this.props.author}</div>
          <div className="message-timestamp"> - {this.props.created_at}</div>
        </div>
        <div className="message-text">{this.props.content}</div>
      </div>
    );
  }
}

export default Message;

