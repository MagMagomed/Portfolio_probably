import React, { Component } from 'react';
import './../css/Home.css';
import './../css/animation.css';

export const Home: React.FC<any> = () => {
    //            <img src="https://otkritkis.com/wp-content/uploads/2021/12/56054-prostranstvo-pautina-uzor-liniya-cifrovoe_iskusstvo-1920x1080-1.jpg" alt="Cyberpunk" className="home-img-background" />

    return (
        <div className="home">
            <div className="home-content">
                <div className="home-heading">
                    <h2>Привет, я Магомед</h2>
                </div>
                <div className="home-subheading">
                    <span>фулл-тайм разработчик, специализирующийся на фронтенд и бэкенд разработке</span>
                </div>
                <div className="home-body">
                    <div className="buttons">
                        <ul className="button-list">
                            <li className="button-list-element fade-in-list-element">
                                <a href="/Offer" className="button">Предложение</a>
                            </li>
                            <li className="button-list-element fade-in-list-element">
                                <a href="/Portfolio" className="button">Портфолио</a>
                            </li>
                            <li className="button-list-element fade-in-list-element">
                                <a href="/Contacts" className="button">Связь</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
