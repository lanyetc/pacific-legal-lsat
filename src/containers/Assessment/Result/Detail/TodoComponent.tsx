import React from "react";
import { Typography, List, ListItem, ListItemSecondaryAction, Button } from "@material-ui/core";
export default function TodoList(props: any) {
    const { todoList, priority, title } = props;
    return (
        <div className={priority==="donow"? "result todo-container" : "result reminder-container"}>
            <div className="title-container">
                <Typography variant="h4" component="h4" className="title bold">
                    <span className="title">{title}</span>
                </Typography>
                {priority==="donow" &&<Typography variant="body2" component="span">Take care of these tasks ASAP</Typography>}
            </div>
            <div className="list-container round">
                <List>
                    {todoList.map((item: any, key: any) => {
                        return (<ListItem className="list-item" key={key}>
                            <div className={priority === "donow" ? "todo-item-bullet" : "reminder-item-bullet"} />
                            <span className="item-label" >{item}</span>
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
        </div>
    );
}