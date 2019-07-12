import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import List from "./list.js";
import About from "./about.js";

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Navigation(props) {
  return (
    <Router>
      <div>
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand>
          <Link to="/">{props.name} </Link>{" "}
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/projects">Projects</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />

            <Route path="/projects" component={List} />
          </Switch>
        {/* </Navbar.Collapse> */}
      </Navbar>

          </div>



    </Router>
  );
}

export default Navigation;
