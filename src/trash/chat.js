import React from 'react';
import styles from './chatcss'; // Assuming the styles object is stored in a file named 'styles.js'

function Chatbot() {
    return (
        <div style={styles.chatbotContainer}>
            <div style={styles.chatbotMessages}>
                {/* Messages will be displayed here */}
                <div style={{ ...styles.message, ...styles.user }}>User message</div>
                <div style={{ ...styles.message, ...styles.bot }}>Bot message</div>
            </div>
            <div style={styles.chatbotInputForm}>
                <input type="text" style={styles.chatbotInput} placeholder="Type your message..." />
                <button style={styles.sendButton}>Send</button>
            </div>
        </div>
    );
}

export default Chatbot;
