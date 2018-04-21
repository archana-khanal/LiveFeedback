import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <NavLink exact to={'/'} className="navbar-brand">Feedback</NavLink>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact to={'/submit'} className="nav-item" activeClassName="active">Submit</NavLink>
                        </li>
                    </ul>
                </div>
                </nav>
        );
    }
}