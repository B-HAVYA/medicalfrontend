import React, { Component } from 'react';
import './Chatbox.css';

class Chatboxnew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }

    handleMessageChange = (e) => {
        this.setState({ message: e.target.value });
    }

    handleKeyUp = (e) => {
        if (e.target.value.trim() === '') {
            e.target.removeAttribute('good');
        } else {
            e.target.setAttribute('good', '');
        }
    }

    render() {
        return (
            <section className="chatbox">
                <section className="chat-window">
                    {/* Messages go here */}
                </section>
                <form className="chat-input" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        autoComplete="on"
                        placeholder="Type a message"
                        value={this.state.message}
                        onChange={this.handleMessageChange}
                        onKeyUp={this.handleKeyUp}
                    />
                    <button>
                        <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                            <path fill="rgba(0,0,0,.38)" d="M17,12L12,17V14H8V10H12V7L17,12M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15Z" />
                        </svg>
                    </button>
                </form>
            </section>
        );
    }
}

export default Chatboxnew;
