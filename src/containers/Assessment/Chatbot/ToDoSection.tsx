import React from "react";

import DescriptionIcon from '@material-ui/icons/Description';

export default function ToDoSection() {
    return (
        <div className="chat todo-container round white">
            <div className="todo-titile-box">
                <div className="container">
                    <DescriptionIcon className="icon"></DescriptionIcon>
                    <span>TO-DO ITEMS</span>
                </div>
            </div>
                
        </div>
    );
}
