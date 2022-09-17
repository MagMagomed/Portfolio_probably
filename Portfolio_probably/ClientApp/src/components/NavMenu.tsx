import React, { Component, Fragment } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

import './../css/NavMenu.css';
import './../css/animation.css';

export const NavMenu: React.FC<any> = () => {

    return (
        <Fragment>
            <div className="aside from-out">
                <div className="aside-content">
                    <div className="main-information">
                        <div className="portrait-container">
                            <div className="portrait">
                                <a href="./">
                                    <img src="https://slovnet.ru/wp-content/uploads/2018/12/10-28.jpg" alt="Portrait"
                                        className="portrait-img" />
                                </a>
                            </div>
                        </div>
                        <div className="my-name-is">
                            <div className="my-name-is-content">
                                <h3 className="my-name-is-content-headind">Магомедов Магомед</h3>
                                <p className="my-name-is-content-subheading">Фуллстек разработчик</p>
                            </div>
                        </div>
                    </div>
                    <div className="side-menu">
                        <ul className="side-menu-list">
                            <li className="side-menu-list-element"><a className="side-menu-button" href="/Offer">Предложение</a></li>
                            <li className="side-menu-list-element"><a className="side-menu-button" href="/Portfolio">Портфолио</a></li>
                            <li className="side-menu-list-element"><a className="side-menu-button" href="/Contacts">Связь</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>

    );
}
