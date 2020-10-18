import React from "react";
import TabComponent from "../tabs/tabs";
import "./app.css";
import Login from "../login/login";

const App = () => {
   return (
       <section className="login-comp">
           <TabComponent/>
           <Login/>
       </section>
   )
};

export default App;