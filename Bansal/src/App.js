import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavItem
} from 'reactstrap';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar expand="lg" style={{ flexWrap:'nowrap' }}>
          <Nav className="m-auto" navbar>
            <NavItem>
              <NavLink to="/" id="mouse-left-click" className="menu-item">
                HOME
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" id="mouse-left-click" className="menu-item">
                ABOUT
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/experience" id="mouse-left-click" className="menu-item">
                EXPERIENCE
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/projects" id="mouse-left-click" className="menu-item">
                PROJECTS
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact" id="mouse-left-click" className="menu-item">
                CONTACT
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <Skills />
          </Route>
          <Route exact path="/experience">
            <Experience />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <header className="App-header">
      <p>
        Hello, I'm <b className="name">Nimit Bansal</b><br />
            I'm a <i className="name">back-end Developer.</i>
      </p>
    </header>
  );
}

export default App;
