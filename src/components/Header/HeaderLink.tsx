/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";


// @material-ui/core components
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from '@material-ui/core/Button';


// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
// import Button from "components/CustomButtons/Button.js";

import "./HeaderStyle.css";

export default function HeaderLinks() {
  return (
    <List className="navList">
      <ListItem className="navListItem">
        <Button className = "navLink">Help</Button>
      </ListItem>
      <ListItem className="navListItem">
        <Button className = "navLink">Login</Button>
      </ListItem>
      <ListItem className="navListItem">
        <Button className = "navLink">Contact</Button>
      </ListItem>
    </List>
  );
}
