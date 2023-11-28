import React from 'react';
import './NavigationBar.css'
import {
    Navbar,
    Nav,
    NavItem,
} from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Skills from '../Skills/Skills'

function ShowNavBar(){
    return (
        <Router>
            <div id="mouse-cursor">
                <Navbar color="dark" dark expand="lg">
                    <Nav className="m-auto" navbar>
                        <NavItem>
                            <Link to="/skills" id="mouse-left-click">
                                SKILLS
                            </Link>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink href="#" id="mouse-cursor"></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Projects" id="mouse-left-click">PROJECTS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" id="mouse-cursor"></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact" id="mouse-left-click">CONTACT</NavLink>
                        </NavItem> */}
                    </Nav>
                </Navbar>

                <Switch>
                    <Route exact path="/skills">
                        <Skills />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default ShowNavBar;