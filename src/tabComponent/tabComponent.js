import React from "react";
import {Link} from "react-router-dom";
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
                <Link to="/"><Tab label="Login" /></Link>
                <Link to="/register"><Tab label="Register" /></Link>
            </Tabs>
        </Paper>
    );
};

export default TabComponent;