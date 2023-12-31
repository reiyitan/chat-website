import React from "react";
import { useState, useRef, useEffect } from "react"; 
import { Message, TextEntry } from "../../components";
import { Scrollbar } from "react-scrollbars-custom";
import "./ChatPage.css";

const testMessages = [
    "test 1",
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "1231231231231231231231231231231231323",
    "dasdasdasdadsadsdasdasdadsadsdasdasdasdasdadsdasdasdasdasdasdasdasdasd",
    "this is a test message this is a test message this is a test message this is a test message this is a test message this is a test message this is a test message this is a test message",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "aa", "bb", "cc", "dd", "ee", "ff", "gg", "hh", "ii", "jj", "kk", "ll", "mm", "nn", "oo", "pp", "qq", "rr", "ss", "tt",
    "uu", "vv", "ww", "xx", "yy", "zz", "aaa", "bbb", "adssadA", "asdasda", "asdasdasdasdasd", "werwerwerew", "btrerfertfg", "asdsadasd",
    "nasjdasdnas", "iernfgejrn", "askndasnd", "rfgnekrgkkergnj", "skdnasjnkdnsad", "askndklasknld", "askldnklasnd"
];

/**
 * The page where a user can send a message to another user. 
 */
export const ChatPage = () => {
    const [value, setValue] = useState("");
    const [messages, setMessages] = useState([]);

    const messageDivRef = useRef(null);
    useEffect(() => {
        if (messageDivRef.current) {
            messageDivRef.current.scrollToBottom();
        }
    }, [messages]);

    return (
        <div
            id="chat-panel"
            className="panel-border box-shadow"
        >
            <div id="message-container">
                <Scrollbar
                    ref={messageDivRef}
                    removeTrackYWhenNotUsed={true}
                    thumbYProps={{
                        renderer: (props) => {
                          const { elementRef, ...restProps } = props;
                          return <span {...restProps} ref={elementRef} className="MsgThumbY" />;
                        }
                    }}
                    trackYProps={{
                        renderer: (props) => {
                          const { elementRef, ...restProps } = props;
                          return <span {...restProps} ref={elementRef} className="MsgTrackY" />;
                        }
                    }}
                >
                    {
                        messages.map((message) => (
                            <Message text={message} key={message} />
                        ))
                    }
                </Scrollbar>
            </div>
            <div
                id="text-entry-container"
            >
                <TextEntry
                    value={value}
                    setValue={setValue}
                    messages={messages}
                    setMessages={setMessages}
                    messageDivRef={messageDivRef}
                />
            </div>
        </div>
    );
}