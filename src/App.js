import React from "react";
import Homepage from "./components/homepage";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App () {
    return (
        <Router>
        <div className="appholder">
        <Navbar /> 
            <div className="content">
                <Switch>
                    <Route path="/">
                        <Homepage />
                    </Route>
                </Switch>
            </div>
        </div>
        </Router>
    )
}

export default App;