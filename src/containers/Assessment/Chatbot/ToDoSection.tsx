import React from "react";
import { List, ListItem } from "@material-ui/core";

export default function ToDoSection(props: any) {
    const { todoList, reminderList } = props;
    return (
        <div className="chat todo-container round grey">
            <div className="chat donow-container round white">
                <div className="donow-titile-box">
                    <div className="container">
                        <span>DO NOW</span>
                    </div>
                </div>
                <div className="list-container ">
                    <List>
                        {todoList.map((item: any, key: any) => {
                            return (<ListItem key={key}>
                                <div className="todo-item-bullet"/>
                                <span className= "item-label" >{item}</span>
                            </ListItem>)
                        })} 
                    </List>
                </div>
            </div>
            <div className="chat dolater-container round white">
                <div className="dolater-titile-box">
                    <div className="container">
                        <span>DO LATER</span>
                    </div>
                </div>
                <div className="list-container ">
                    <List>
                        {reminderList.map((item: any, key: any) => {
                            return (<ListItem key={key}>
                               <div className="reminder-item-bullet"/>
                                <span className= "item-label" >{item}</span>
                            </ListItem>)
                        })}
                    </List>
                </div>
            </div>
        </div>
    );
}
