import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Nav, Jumbotron } from "react-bootstrap";

import List from "./list.js";

import About from './about.js';

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  {
    path: "/",
    exact: true,
    // sidebar: () => <div>home!</div>,
    main: () => <div>
    <h2>Hi, I'm Kelly.</h2>
    <p>I'm a web developer based in Vermont that is always looking for a challenge. Feel free to explore my portfolio and email me at kellyadavis7@gmail.com. Thank you for stopping by. </p>
    </div>

  },
  {
    path: "/projects",
    // sidebar: () => <List />,
    main: () => (
      <div>
        <h2>Projects</h2>
        <List />
      </div>
    )
  },
  {
    path: "/about",
    // sidebar: () => <div>shoelaces!</div>,
    main: () => <About />
  }
];

function SidebarExample() {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <Link to="/">Kelly Davis</Link>{" "}
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/projects">Projects</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav>

          {routes.map((route, index) => (
            // You can render a <Route> in as many places
            // as you want in your app. It will render along
            // with any other <Route>s that also match the URL.
            // So, a sidebar or breadcrumbs or anything else
            // that requires you to render multiple things
            // in multiple places at the same URL is nothing
            // more than multiple <Route>s.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
            />
          ))}
        </Navbar>


        <Jumbotron>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </Jumbotron>
      </div>
    </Router>
  );
}

export default SidebarExample;
