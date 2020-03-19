import React from "react";
import { Tabs, Tab } from "@material-ui/core";
import './TabNatStyle.css';

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
        return true; // FIXME adding this for now to quiet the compiler warnings
    });
    return (
        <div className="full-height-container">
            <Tabs 
            value={value} onChange={handleChange} 
            aria-label="simple tabs example" 
            variant="scrollable" 
            scrollButtons="auto"
            className="tab-nav">
                {tabs}
            </Tabs>
            {tabList.map((prop: any, key: any) => {
                if (key === value) {
                    return <div key={key} className="container with-bottom-padding">{prop.tabContent}</div>;
                }
                return null;
            })}
        </div>

    );
}
