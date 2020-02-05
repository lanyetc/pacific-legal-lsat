import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from '@material-ui/core/Button';

export default function ChatContentSection() {
    const content = "Intro Info. Privacy policies should explain to the person whose personal information we are collecting: why we are collecting it, what we use it for, how and when we have to disclose it, and how a person can review what we are doing.";
    return (
        <div className="content-container">
            <div className="chat-area">
                <div className="chat-block left">
                    <div className="avatar"></div>
                    <div className="bubble white round">{content}</div>
                </div>
                <div className="chat-block right">
                    <div className="avatar"></div>
                    <div className="bubble white round">
                        <List>
                            <ListItem className="navListItem">
                                <Button className="navLink">Yse</Button>
                            </ListItem>
                            <ListItem className="navListItem">
                                <Button className="navLink">No</Button>
                            </ListItem>
                        </List>
                    </div>
                </div>
            </div>
        </div>
    );
}
