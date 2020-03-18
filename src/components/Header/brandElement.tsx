import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Button } from "@material-ui/core";

interface Props extends RouteComponentProps {
    brand: string,
    brandName: string,
    toolTitle: string,
}

class BrandElement extends React.Component<Props> {
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <div>
              <img className="navBrand" src={this.props.brand} alt="brand icon" />
              <Button className="home-button" onClick={() => {this.props.history.push("/")}}>
                <span className="brandTitle">{this.props.brandName}</span>
                <span className="navTitle">{this.props.toolTitle}</span>
              </Button>
            </div>
          );
    }
}

export default withRouter(BrandElement)