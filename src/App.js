import React from "react";
import Homepage from "./components/homepage";
import Navbar from "./components/navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/contact";
import Resume from "./components/resume";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App () {
    return (
        <Router>
        <div className="appholder">
        <Navbar /> 

                    <Switch>
                        <Route exact path="/">
                            <Homepage />
                        </Route>
                        <Route exact path="/portfolio">
                         <Portfolio />
                        </Route>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                        <Route exact path="/resume">
                            <Resume />
                        </Route>
                    </Switch>
                    </div>
                
            
        
        <Footer />
        </Router>
    )
}

export default App;