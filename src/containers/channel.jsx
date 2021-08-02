import React, {Component} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectChannel, setMessages} from '../actions'

class Channel extends Component{
  handleClick = () => {
    if (this.props.selectChannel) {
      this.props.selectChannel(this.props.name);
      this.props.setMessages(this.props.name);
    }
  }

  render() {
    return(
      <div className="channel" onClick={this.handleClick} >{this.props.name}</div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {selectChannel: selectChannel,
    setMessages: setMessages},
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Channel);
