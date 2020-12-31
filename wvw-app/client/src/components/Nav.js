import React, { Component } from "react";
import { LoginContext } from './LoginContext';

class Nav extends Component {

    static contextType = LoginContext;

    render() {
        const { isLoggedIn } = this.context;
        let loginLinks;

        if (isLoggedIn) {
            loginLinks =
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/logout">Logout</a>
                        </li>
                    </ul>
                </div>
        } else {
            loginLinks =
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/login">Login</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/register">Register</a>
                    </li>
                </ul>
            </div>
        }

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">WvW</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            {loginLinks}
            </nav >
        )
    }
}

export default Nav;