import React, {useEffect} from "react";
import {useHistory, useLocation} from "react-router-dom";
import {Paper, Tab, Tabs} from "@material-ui/core";

const TabComponent = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const history = useHistory();
    const location = useLocation();
    useEffect(() => {
        if(location.pathname === "/register") setValue(1);
    })

    return (
        <Paper>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab
                    onClick={() => history.push("/")}
                    label="Login" />
                <Tab
                    onClick={() => history.push("/register")}
                    label="Register" />
            </Tabs>
        </Paper>
    );
};

export default TabComponent;