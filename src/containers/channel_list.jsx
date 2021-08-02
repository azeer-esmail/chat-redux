import React, {Component} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Channel from './channel.jsx'
import {setChannels , setMessages} from '../actions'

class ChannelList extends Component{
  renderList = () => {
    return (
      this.props.channels.map( channel => <Channel key={channel} name={channel} />)
    )
  }

  // componentWillMount () {
  //   this.props.setChannels(this.props.channels)
  // }

  render() {
    return(
      <div className="channel-list">
        {this.renderList()}
      </div>
    );
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
    channels: state.channels
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(ChannelList);
