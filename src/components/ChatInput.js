import React from 'react';


class ChatInput extends React.Component {
  state = {
    chatInput:''
  }

  textChangeHandler =(e)=> {
    this.setState({ chatInput: e.target.value })
  }
  submitHandler =(e)=> {
    e.preventDefault()
    this.props.onSend(this.state.chatInput)
    this.setState({ chatInput: '' });
  }
  render() {
    
    return (
      <form className="chat-input" onSubmit={this.submitHandler}>
        <input type="text"
          onChange={this.textChangeHandler}
          value={this.state.chatInput}
          placeholder="Write a message..."
          required />
      </form>
    );
  }
}

ChatInput.defaultProps = {
};

export default ChatInput;
