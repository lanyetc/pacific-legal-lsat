import React from "react";
import Grid from '@material-ui/core/Grid';
import { Card, CardActionArea } from "@material-ui/core";
import './LandingPageStyle.css';
import icon0 from "../../Assets/img/icon1.png"
import icon2 from "../../Assets/img/icon2.png"
import icon3 from "../../Assets/img/icon3.png"
import icon4 from "../../Assets/img/icon4.png"
import icon5 from "../../Assets/img/icon5.png"
import icon6 from "../../Assets/img/icon6.png"
import { withRouter } from "react-router-dom";

 let ModuleMenu: any = function(props: any) {
    let {history} = props
    console.log("histo          ry: " + history)
    return (
        <div className="ModuleMenu">
            <h1>Choose a module to start</h1>
            <div className="ModuleItems">

                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Card >
                            <CardActionArea className="module-card" onClick={() => history.push('/assessment')}>
                                <span className="icon1" />
                                <h1>PRIVACY & CONFIDENTIALITY</h1>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <CardActionArea className="module-card" >
                            <img src={icon2}></img>
                            <h1>EMPLOYMENT</h1>
                        </CardActionArea>
                    </Grid>
                    <Grid item xs={4}>
                        <CardActionArea className="module-card" >
                            <img src={icon3}></img>
                            <h1>HUMAN RIGHTS</h1>
                        </CardActionArea>
                    </Grid>
                    <Grid item xs={4}>
                        <CardActionArea className="module-card" >
                            <img src={icon4}></img>
                            <h1>ACCESS TO RECORDS</h1>
                        </CardActionArea>
                    </Grid>
                    <Grid item xs={4}>
                        <CardActionArea className="module-card" >
                            <img src={icon5}></img>
                            <h1>GOVERNANCE</h1>
                        </CardActionArea>
                    </Grid>
                    <Grid item xs={4}>
                        <CardActionArea className="module-card" >
                            <img src={icon6}></img>
                            <h1>SOCIETIES ACT COMPLIANCE</h1>
                        </CardActionArea>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default ModuleMenu = withRouter(ModuleMenu)
