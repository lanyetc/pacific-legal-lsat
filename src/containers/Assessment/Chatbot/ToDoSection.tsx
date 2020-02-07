import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// nodejs library that concatenates classes
import classNames from "classnames";

import DescriptionIcon from '@material-ui/icons/Description';

export default function ToDoSection() {
    return (
        <div className="right-container round white">
            <div className="todo-titile-box">
                <div className="container">
                    <DescriptionIcon className="icon"></DescriptionIcon>
                    <span>TO-DO ITEMS</span>
                </div>
            </div>
                
        </div>
    );
}
