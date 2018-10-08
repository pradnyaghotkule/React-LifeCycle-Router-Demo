import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const HomeComponent = () => (
    <h1>Home Page</h1>
)

const AboutComponent = () => (
    <h1>About Page</h1>
)

const ContentDetail = (props) => (
    <div>{props.match.params.contentName
        ?
        <img src={'http://lorempixel.com/400/200/' + props.match.params.contentName + '/1/'} />
        : null}
    </div>
)


const ContentComponent = () => (
    <div>
        <h1>Content Page</h1>
        <div>
            <NavLink className="list-group-item" exact activeClassName="active" to="/content/city">City</NavLink>
            <NavLink className="list-group-item" activeClassName="active" to="/content/sports">Sports</NavLink>
            <Route path="/content/:contentName" component={ContentDetail} />
        </div>
    </div>
)

const Links = () => (
    <div className="list-group">
        <NavLink className="list-group-item" exact activeClassName="active" to="/">Home</NavLink>
        <NavLink className="list-group-item" activeClassName="active" to="/about">About</NavLink>
        <NavLink className="list-group-item" activeClassName="active" to="/content">Content</NavLink>
    </div>
)

const RouterComponent = () => (
    <Router>
        <div className="row">
            <section className="col-sm-4">
                <Links />
            </section>
            <section className="col-sm-8">
                <Route exact path="/" component={HomeComponent}></Route>
                <Route path="/about" component={AboutComponent}></Route>
                <Route path="/content" component={ContentComponent}></Route>
            </section>
        </div>
    </Router>
)

ReactDOM.render(<RouterComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
