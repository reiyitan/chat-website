import React from "react"; 
import { Message } from "../Message";
import "./ChatPanel.css";

const messages = [
    "test 1",
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "1231231231231231231231231231231231323",
    "dasdasdasdadsadsdasdasdadsadsdasdasdasdasdadsdasdasdasdasdasdasdasdasd",
    "this is a test message this is a test message this is a test message this is a test message this is a test message this is a test message this is a test message this is a test message"
];

export const ChatPanel = () => {
    return (
        <div
            id="chat-panel"
            className="panel-border"
        >
            {
                messages.map((message) => (
                    <Message
                        text={message}
                        key={message}
                    />
                ))
            }
        </div>
    );
}