import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <NavLink exact to={'/'} className="navbar-brand">LiveFeedback</NavLink>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact to={'/'} className="nav-item" activeClassName="active">View</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/submit'} className="nav-item" activeClassName="active">Give</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}