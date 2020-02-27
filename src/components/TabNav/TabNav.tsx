import React from "react";
import { Tabs, Tab } from "@material-ui/core";

export default function TabNav(props: any) {
    const { tabList } = props;
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    console.log(tabList);
    const tabs = tabList.map((tab: any, i: any) => {
        if (tab.title) {
            return <Tab label={tab.title} key={i} className="tab" />
        }
    });
    return (
        <div className="container">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="fullWidth">
                {tabs}
                {/* <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} /> */}
            </Tabs>
            {tabList.map((prop: any, key: any) => {
                if (key === value) {
                    return <div key={key} className="container">{prop.tabContent}</div>;
                }
                return null;
            })}
        </div>

    );
}
