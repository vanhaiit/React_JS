import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'Home',
        to: '/',
        icon: 'fa fa-home',
        exact: true
    },
    {
        name: 'Products',
        to: '/products',
        icon: 'fa fa-cube',
        exact: false
    },
    {
        name: 'User Profile',
        to: '/users',
        icon: 'fa fa-user',
        exact: false
    },
    {
        name: 'Chat',
        to: '/chat',
        icon: 'fa fa-gg-circle',
        exact: false
    },
    {
        name: 'Maps',
        to: '/maps',
        icon: 'fa fa-map-marker',
        exact: false
    },
    {
        name: 'Notification',
        to: '/notification',
        icon: 'fa fa-bell-o',
        exact: false
    },
    {
        name: 'URL support',
        to: '/url',
        icon: 'fa fa-medkit',
        exact: false
    }
];

const MenuLink = ({ label, icon, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'nav-item active' : 'nav-item';
                return (
                    <li className={active}>
                        <Link className="nav-link" to={to}>
                            <i className={icon}></i>
                            <p>{label}</p>
                        </Link>
                    </li>
                );
            }}
        />
    );
};

class Menu extends Component {
    render() {
        return (

            <div className="sidebar" data-color="purple" data-background-color="white" data-image="public/assets/img/sidebar-1.jpg">
                <div className="logo" style={{ background: "indigo" }}>
                    <a href="http://www.creative-tim.com" style={{ color: "white", fontWeight: "bold" }} className="simple-text logo-normal"> REACT_JS V.1 </a>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        {this.showMenus(menus)}
                    </ul>
                </div>
            </div>
        );
    }
    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        icon={menu.icon}
                        activeOnlyWhenExact={menu.exact}
                    />
                )
            });
        }
        return result;
    }
}

export default Menu;
