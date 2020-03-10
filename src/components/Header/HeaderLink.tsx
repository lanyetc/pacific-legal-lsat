import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from '@material-ui/core/Button';
import "./HeaderStyle.css";

export default function HeaderLinks() {
  return (
    <List className="navList">
      {/* <ListItem className="navListItem">
        <Button className = "navLink">Help</Button>
      </ListItem>
      <ListItem className="navListItem">
        <Button className = "navLink">Login</Button>
      </ListItem> */}
      <ListItem className="navListItem">
        <Button className = "navLink" href="https://www.pacificlegaloutreach.com/contact" target="_blank">Contact</Button>
      </ListItem>
    </List>
  );
}
