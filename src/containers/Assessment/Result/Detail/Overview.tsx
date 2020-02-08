import React from "react";
import TabNav from "../../../../components/TabNav/TabNav";
import { Typography, List, ListItem, Radio, FormControlLabel, ListItemSecondaryAction, Button } from "@material-ui/core";
import DescriptionIcon from '@material-ui/icons/Description';
import { getTodoList } from '../../../../data/context';
function TodoList() {
    let todoList = getTodoList();
    return (
        <div className="list-container round grey">
            <List>
                {todoList.map((item: any, key: any) => {
                    return (<ListItem key={key}>
                        <FormControlLabel
                            value={item.title}
                            control={<Radio color="primary" />}
                            label={item.title}
                            labelPlacement="end"
                        />
                        <ListItemSecondaryAction>
                            <div className="btn-group">
                                <Button variant="outlined">more info</Button>
                                <Button variant="contained" color="primary">create now</Button>
                            </div>
                        </ListItemSecondaryAction>
                    </ListItem>)
                })}
            </List>
        </div>
    );
}

function ResultList() {
    let todoList = getTodoList();
    return (
        <div className="list-container ">
            <List>
                {todoList.map((item: any, key: any) => {
                    return (<ListItem key={key}>
                        <FormControlLabel
                            value={item.title}
                            control={<Radio color="primary" />}
                            label={item.title}
                            labelPlacement="end"
                        />
                    </ListItem>)
                })}
            </List>
        </div>
    );
}


export default function Overview() {
    return (
        <div className="container">
            <div className="result todo-container">
                <Typography variant="h4" component="h4" className="title bold">
                    <DescriptionIcon></DescriptionIcon>
                    <span className="title">TO-DO LIST</span>
                </Typography>
                <TodoList></TodoList>
            </div>
            <div className="result remindder-container">
                <Typography variant="h4" component="h4" className="title bold">
                    <DescriptionIcon></DescriptionIcon>
                    <span className="title">REMINDERS</span>
                </Typography>
                <ResultList></ResultList>
            </div>
        </div>
    );
}
