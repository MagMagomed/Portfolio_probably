import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import './../css/BackgroundImage.css';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <div className='img-background-container'>
                    <img src="./../images/d3h7ofnt73621.png" alt="Cyberpunk" className="img-background" />
                    <div className="img-saver"></div>
                </div>
                
                <NavMenu />
                <Fragment>
                    {this.props.children}
                </Fragment>
            </div>
        );
    }
}
