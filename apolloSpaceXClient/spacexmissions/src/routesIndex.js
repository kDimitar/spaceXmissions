import React from 'react';
import { BrowserRouter as Router,  Routes ,  Route,  } from "react-router-dom";

import Home from './pages/Home/Home'
import NavBar from './components/NavBar/NavBar';
import Rocket from './pages/Rocket'

const Routing = () =>(
    <Router>
        <NavBar>            
            <Routes>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/rocket/:id" component={Rocket}></Route>                
            </Routes>
        </NavBar>
    </Router>
);

export default Routing;