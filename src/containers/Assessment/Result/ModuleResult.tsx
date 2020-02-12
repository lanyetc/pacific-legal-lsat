import React from "react";

import { Breadcrumbs, Link, Button, Typography } from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import leftpic from '../../../assets/img/leftpic.png';
import GetAppIcon from '@material-ui/icons/GetApp';
import ScreenShareOutlinedIcon from '@material-ui/icons/ScreenShareOutlined';

import './ResultStyle.css';

export default function ModuleResult() {
    let module = {name: "Privacy"};
    let result = {
        repo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    }
    return (
        <div className="moudule-result-container">
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} className="textwhite">
                <Link color="inherit">
                    Modules
                </Link>
                <Link color="inherit">
                    Privacy
                </Link>
                <Typography className="textwhite bold">Results</Typography>
            </Breadcrumbs>
            <img src={leftpic}></img>
            <div className="module-title textwhite bold">
                Module Results
                <span className="module-title-sm"> | {module.name}</span>
            </div>
            <div className="module-repo textwhite">
                {result.repo}
            </div>
            <div className="btn-group">
                <Button variant="contained" startIcon={<GetAppIcon />}>Download</Button>
                <Button variant="contained" startIcon={<ScreenShareOutlinedIcon />}>Share</Button>
            </div>
            <span>
                or
                <Link className="bold"> Sign up </Link>
                save your results
            </span>
        </div>
    );
}
