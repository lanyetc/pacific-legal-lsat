import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";

import './HeaderStyle.css'
import '../common.css'


export default function Header(props: { color: any; rightLinks: any; leftLinks: any; brand: string; toolTitle: string; fixed: boolean; absolute: boolean; }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const { rightLinks, leftLinks, brand, toolTitle } = props;

  const brandComponent = <div><Button className="navBrand">{brand}</Button><span className="navTitle">{toolTitle}</span></div>;
  return (
    <AppBar className="appBar transparent">
      <Toolbar className="navContainer">
        {leftLinks !== undefined ? { brandComponent } : null}
        <div className="flex">
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
              brandComponent
            )}
        </div>
        <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      {/* <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      </Hidden> */}
    </AppBar>
  );
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  toolTitle: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};
