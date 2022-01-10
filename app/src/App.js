import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateCourse from "./components/create-course.component";
import Courses from "./components/courses.component";

function App() {
  return (<Router>
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to={"/create-course"}>Create Course</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/courses"}>Course List</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Switch>
              <Route exact path='/' component={Courses} />
              <Route path="/create-course" component={CreateCourse} />
              <Route path="/courses" component={Courses} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;