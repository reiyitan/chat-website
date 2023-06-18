import React from "react"; 
import { Message } from "../Message";
import { TextEntry } from "../TextEntry";
import "./ChatPanel.css";

const messages = [
    "test 1",
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "1231231231231231231231231231231231323",
    "dasdasdasdadsadsdasdasdadsadsdasdasdasdasdadsdasdasdasdasdasdasdasdasd",
    "this is a test message this is a test message this is a test message this is a test message this is a test message this is a test message this is a test message this is a test message",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "aa", "bb", "cc", "dd", "ee", "ff", "gg", "hh", "ii", "jj", "kk", "ll", "mm", "nn"

];

export const ChatPanel = () => {
    return (
        <div
            id="chat-panel"
            className="panel-border"
        >
            <div
                id="message-container"
                className="panel-border"
            >
                {
                    messages.map((message) => (
                        <Message text={message} />
                    ))
                }
            </div>

            <div
                id="text-entry-container"
            >
            </div>
        </div>
    );
}