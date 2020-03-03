import React from "react";


import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from '@material-ui/core/Button';


export default function UserMessage(props: any) {
    const options = props.message.options;
    const questionId = props.message.id;
    const extraOption = props.message.extraInfo;
    const optionItems = options.map((option: any) =>
        <ListItem className="nav-list-item" id={option.id} key={option.id}>
            <Button className={props.message.selectedOptionId === option.id ? "nav-link selected" : "nav-link"} onClick={() => props.handleSelectOptions(questionId, option.id)}>{option.label}</Button>
        </ListItem>
    );
    const extraOptionItem =
        extraOption ?
            (<ListItem className="nav-list-item">
                <Button className={props.message.showExtraInfo ? "nav-link selected" : "nav-link"} onClick={() => props.handleShowExtraInfo(questionId)}>{extraOption.title}</Button>
            </ListItem>) : null

    return (
        <div className="chat-block user">
            <div className="bubble round">
                <List>
                    {optionItems}
                    {extraOptionItem}
                </List>
            </div>
        </div>
    )
}