import React from "react";
import { Typography, List, ListItem, Radio, FormControlLabel, ListItemSecondaryAction, Button } from "@material-ui/core";
import DescriptionIcon from '@material-ui/icons/Description';
function TodoList(props: any) {
    const { todoList } = props;
    return (
        <div className="list-container round">
            <List>
                {todoList.map((item: any, key: any) => {
                    return (<ListItem className="list-item" key={key}>
                       <div className="todo-item-bullet"/>
                        <span className= "item-label" >{item.title}</span>
                        <ListItemSecondaryAction>
                            <div className="btn-group">
                                <Button variant="outlined">more info</Button>
                                {/* <Button variant="contained" color="primary">create now</Button> */}
                            </div>
                        </ListItemSecondaryAction>
                    </ListItem>)
                })}
            </List>
        </div>
    );
}

function ReminderList(props: any) {
    const { reminderList } = props;
    return (
        <div className="list-container ">
            <List>
                {reminderList.map((item: any, key: any) => {
                    return (<ListItem key={key} className="list-item">
                        <div className="reminder-item-bullet"/>
                        <span className= "item-label" >{item.title}</span>
                         <ListItemSecondaryAction>
                            <div className="btn-group">
                                <Button variant="outlined">more info</Button>
                                {/* <Button variant="contained" color="primary">create now</Button> */}
                            </div>
                        </ListItemSecondaryAction>
                    </ListItem>)
                })}
            </List>
        </div>
    );
}


export default function Overview(props: any) {
    const { context } = props;
    return (
        <div className="overview-container">
            <div className="result todo-container">
                <div className="title-container">
                    <Typography variant="h4" component="h4" className="title bold">
                        <span className="title">DO NOW</span>
                    </Typography>
                    <Typography variant="body2" component="span">
                    Take Care of the task on this list ASAP. This might put you in legal risk
                    </Typography>
                </div>
                <TodoList todoList={context.todos}></TodoList>
            </div>
            <div className="result reminder-container">
                <div className="title-container">
                    <Typography variant="h4" component="h4" className="title bold">
                        <span className="title">Do Later</span>
                    </Typography>
                </div>
                <ReminderList reminderList={context.reminders}></ReminderList>
            </div>
        </div>
    );
}
