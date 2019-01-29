import React from 'react';
import io from 'socket.io-client';
import config from '../config';

import Messages from './Messages';
import ChatInput from './ChatInput';
import '../styles/ChatApp.css'


class ChatApp extends React.Component {
  socket = {}
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      users:[]
    }
    this.socket = io(config.api).connect()
    this.socket.on('server:message', message => {
      this.addMessage(message)
    })
  }



  addMessage =(message)=>{
    // Append the message to the component state
    const messages = this.state.messages
    messages.push(message)
    this.setState({ messages })
  }

  sendHandler = (message) => {
    const messageObject = {
      username: this.props.username,
      message
    }
    this.socket.emit('client:message', messageObject)
    messageObject.fromMe = true;
  this.addMessage(messageObject);
  }
  render() {
    return (<div className="container">
      <h3>Friendly</h3>
      <Messages messages={this.state.messages}/>
      <ChatInput onSend={this.sendHandler}/>
    </div>)
  }

}
ChatApp.defaultProps = {
  username: 'Anonymous'
};

export default ChatApp;
