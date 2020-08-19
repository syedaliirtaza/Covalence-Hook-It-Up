import React, { Fragment } from 'react';
import {BrowserRouter as Router, Link , Switch, Route } from 'react-router-dom';
import Home from './Home';
import Details from './Details';

const App = () => {

    return (
        <Router>
        <Fragment>
            <h1>Hello</h1>
            <Link to="/" >Home Page</Link>
            <p>....</p>
            <Link to="/:id/details">Show Details</Link>
        </Fragment>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:id/details" component={Details} />
        </Switch>
        </Router>

    );
}

export default App;