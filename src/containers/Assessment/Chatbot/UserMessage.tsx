import React from "react";


import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from '@material-ui/core/Button';


export default function UserMessage(props: any) {
    // what props do user messages need? 
    // takes userOptions for props.

    function handleResponseOptions(e: any){
        console.log("response options need to be handled: " + e)
    }

    const options = props.userOptions
    const optionItems = options.map((option: any) =>
        <ListItem className="navListItem" key={option.id}>
            <Button className="navLink" onClick={handleResponseOptions}>{option.label}</Button>
        </ListItem>
    );

    return(
        <div className="chat-block right">
        <div className="avatar"></div>
        <div className="bubble white round">
            <List>
                {optionItems}
            </List>
        </div>
    </div>
    )
}