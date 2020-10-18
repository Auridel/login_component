import React from "react";
import {Paper, Tab, Tabs} from "@material-ui/core";

const TabComponent = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
                variant="fullWidth"
            >
                <Tab label="Login" />
                <Tab label="Register" />
            </Tabs>
        </Paper>
    );
};

export default TabComponent;