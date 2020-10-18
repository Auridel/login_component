import React from "react";
import {useTransition, animated} from 'react-spring'
import {Route, Switch, useLocation} from "react-router-dom";
import TabComponent from "../tabComponent/tabComponent";
import Login from "../login/login";
import Register from "../register/register";

import "./app.css";

const App = () => {
    const location = useLocation()
    const transitions = useTransition(location, location => location.pathname, {
        from: {  opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { delay: 1000, opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: {position: "absolute",delay: 1000, opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })

   return (
           <section className="login-comp">
               <TabComponent/>
               {transitions.map(({ item: location, props, key }) => (
                <animated.div key={key} style={props}>
                    <Switch location={location}>
                       <Route path="/" exact component={Login}/>
                       <Route path="/register" component={Register}/>
                    </Switch>
                </animated.div>
                   ))}
           </section>
   )
};

export default App;