import React from "react";

import DescriptionIcon from '@material-ui/icons/Description';
import { List, ListItem, FormControlLabel, Radio } from "@material-ui/core";

export default function ToDoSection(props:any) {
     const {todoList, reminderList} = props;
     console.log(todoList);
    return (
        <div className="chat todo-container round white">
            <div className="todo-titile-box">
                <div className="container">
                    <DescriptionIcon className="icon"></DescriptionIcon>
                    <span>TO-DO ITEMS</span>
                </div>
            </div>
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
        </div>
    );
}
