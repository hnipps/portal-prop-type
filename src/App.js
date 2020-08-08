import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [mountPoint, setMountPoint] = useState();

  const mountRef = useRef(null);

  useEffect(() => {
    if (mountRef.current) {
      setMountPoint(mountRef.current);
    }
  }, [setMountPoint, mountRef]);

  return (
    <>
      <div ref={mountRef} id="test-id"></div>
      <Router>
        {mountPoint
          ? ReactDOM.createPortal(
              React.createElement(Link, { to: "/product" }, "TEST"),
              mountPoint
            )
          : null}
        <Switch>
          <Route path="/">
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
