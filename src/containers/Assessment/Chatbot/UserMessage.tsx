import React from "react";


import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from '@material-ui/core/Button';


export default function UserMessage(props: any) {
    // what props do user messages need? 
    // takes userOptions for props.


    const options = props.message.options;
    const extraOption = props.message.extraInfo;
    const optionItems = options.map((option: any) =>
        <ListItem className="navListItem" id={option.id} key={option.id}>
            <Button className="navLink" onClick={() => props.handleSelectOptions(option.id)}>{option.label}</Button>
        </ListItem>
    );
    const extraOptionItem =
        extraOption ?
        (<ListItem className="navListItem">
            <Button className="navLink" onClick={() => props.handleShowExtraInfo()}>{extraOption.title}</Button>
        </ListItem>) : null

    return (
        <div className="chat-block right">
            <div className="avatar"></div>
            <div className="bubble white round">
                <List>
                    {optionItems}
                    {extraOptionItem}
                </List>
            </div>
        </div>
    )
}