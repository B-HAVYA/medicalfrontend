import React, { useState } from 'react';
import './style.css';

export default function Chatbota() {
    const [text, setText] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const str_time = hour + ":" + minute;
    
        const rawText = text;
        setText('');
    
        const userHtml = (
            <div className="d-flex justify-content-end mb-4">
                <div className="msg_cotainer_send">
                    {rawText}
                    <span className="msg_time_send">{str_time}</span>
                </div>
                <div className="img_cont_msg">
                    <img src="https://i.ibb.co/d5b84Xw/Untitled-design.png" className="rounded-circle user_img_msg" alt="user"/>
                </div>
            </div>
        );
    
        // Use the functional form of setMessages
        setMessages(prevMessages => [...prevMessages, userHtml]);
    
        try {
            const response = await fetch("http://localhost:8080/get", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    msg: rawText
                })
            });
            const data = await response.text();
            const botHtml = (
                <div className="d-flex justify-content-start mb-4">
                    <div className="img_cont_msg">
                        <img src="https://www.prdistribution.com/spirit/uploads/pressreleases/2019/newsreleases/d83341deb75c4c4f6b113f27b1e42cd8-chatbot-florence-already-helps-thousands-of-patients-to-remember-their-medication.png" className="rounded-circle user_img_msg" alt="bot"/>
                    </div>
                    <div className="msg_cotainer">
                        {data}
                        <span className="msg_time">{str_time}</span>
                    </div>
                </div>
            );
    
            // Update messages using the functional form of setMessages
            setMessages(prevMessages => [...prevMessages, botHtml]);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    

    return (
        <div style={{background:'#686de0'}}>
            <div className="container-fluid h-100">
                <div className="row justify-content-center h-100">		
                    <div className="col-md-8 col-xl-6 chat">
                        <div className="card">
                            <div className="card-header msg_head">
                                <div className="d-flex bd-highlight">
                                    <div className="img_cont">
                                        <img src="https://www.prdistribution.com/spirit/uploads/pressreleases/2019/newsreleases/d83341deb75c4c4f6b113f27b1e42cd8-chatbot-florence-already-helps-thousands-of-patients-to-remember-their-medication.png" className="rounded-circle user_img" alt="bot"/>
                                        <span className="online_icon"></span>
                                    </div>
                                    <div className="user_info">
                                        <span>Medical Chatbot</span>
                                        <p>Ask me anything!</p>
                                    </div>
                                </div>
                            </div>
                            <div id="messageFormeight" className="card-body msg_card_body">
                                {messages.map((message, index) => (
                                    <React.Fragment key={index}>
                                        {message}
                                    </React.Fragment>
                                ))}
                            </div>
                            <div className="card-footer">
                                <form id="messageArea" className="input-group" onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        id="text"
                                        name="msg"
                                        placeholder="Type your message..."
                                        autoComplete="off"
                                        className="form-control type_msg"
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        required
                                    />
                                    <div className="input-group-append">
                                        <button type="submit" id="send" className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
