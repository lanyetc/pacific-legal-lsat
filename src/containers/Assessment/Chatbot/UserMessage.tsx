import React from "react";


import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from '@material-ui/core/Button';
import { MessageType, MultiSelectQuestion } from "../../../model";
import { DisplayedMessage } from './ChatbotPage'



export default function UserMessage(props: any) {
    const { message, selectedOptionIds, showExtraInfo }: DisplayedMessage = props.message;
    const options = message.options;
    const questionId = message.id;
    const extraOptionContent = message.extraInfo;
    let optionItems: any = [];
    let userOptionComponent: any;
    if (message instanceof MultiSelectQuestion) {
        optionItems = options.map((option: any) => {
            return (
                <ListItem className="nav-list-item" id={option.id} key={option.id}>
                    <Button className={selectedOptionIds.includes(option.id) ? "nav-link selected" : "nav-link"} onClick={() => props.handleMultiSelectOptions(questionId, option.id)}>{option.label}</Button>
                </ListItem>)
        }
        );
        userOptionComponent = <List>
            {optionItems}
            {generateExtraOptionComponent()}
            <ListItem className="nav-list-item">
                <Button className="nav-link" onClick={() => props.handleMultiSelectSubmit(questionId)}>SUBMIT</Button>
            </ListItem>
        </List>
    } else { // single select
        optionItems = options.map((option: any) => {
            return (<ListItem className="nav-list-item" id={option.id} key={option.id}>
                <Button className={selectedOptionIds.includes(option.id) ? "nav-link selected" : "nav-link"} onClick={() => props.handleSelectOptions(questionId, option.id)}>{option.label}</Button>
            </ListItem>)
        })
        userOptionComponent = (
            <List>
                {optionItems}
                {generateExtraOptionComponent()}
            </List>
        )
        console.log(userOptionComponent);
    }

    function generateExtraOptionComponent() {
        return (
            extraOptionContent ?
                (<ListItem className="nav-list-item">
                    <Button className={showExtraInfo ? "nav-link selected" : "nav-link"} onClick={() => props.handleShowExtraInfo(questionId)}>{extraOptionContent.title}</Button>
                </ListItem>) : null)
    }


    return (
        <div className="chat-block user">
            <div className="bubble round">
                {userOptionComponent}
            </div>
        </div>
    )
}