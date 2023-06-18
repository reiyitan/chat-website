import React from "react";
import { useState } from "react"; 
import { Message } from "../Message";
import { TextEntry } from "../TextEntry";
import { Scrollbar } from "react-scrollbars-custom";
import "./ChatPanel.css";

export const ChatPanel = () => {
    const [messages, setMessages] = useState([
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
    ]);

    return (
        <div
            id="chat-panel"
            className="panel-border"
        >
            <div id="message-container">
                <Scrollbar
                    removeTrackYWhenNotUsed={true}
                    thumbYProps={{
                        renderer: (props) => {
                          const { elementRef, ...restProps } = props;
                          return <span {...restProps} ref={elementRef} className="tHuMbY" />;
                        }
                    }}
                    trackYProps={{
                        renderer: (props) => {
                          const { elementRef, ...restProps } = props;
                          return <span {...restProps} ref={elementRef} className="TrackY" />;
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
            </div>
        </div>
    );
}