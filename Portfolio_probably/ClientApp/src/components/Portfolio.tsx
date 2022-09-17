import { Component } from 'react';
import { FaEnvelope, FaGithub } from "react-icons/fa";
import React from 'react';
import './../css/Home.css';
import './../css/list.css';
import './../css/Contact.css';
import './../css/animation.css';

export const Portfolio: React.FC<any> = () => {
    //
    //            <img src="https://otkritkis.com/wp-content/uploads/2021/12/56054-prostranstvo-pautina-uzor-liniya-cifrovoe_iskusstvo-1920x1080-1.jpg" alt="Cyberpunk" class="home-img-background" />
    return (
        <div className="def-container">
            <div className='def-content'>
                <div className="def-heading">
                    <h2>Портфолио</h2>
                </div>
                <div className="def-subheading">
                    
                </div>
                <div className="def-body">
                    <span>На данный момент у меня нет примеров моей работы, кроме
                        той, что вы видите. Это связано с тем, что я не занимался
                        фриласном, а внутренние приложения компаний,
                        как вы понимаете, показывать нельзя.
                        <br />
                        <br />
                        Но возможно, в ближайшее время, я запущу пару pet-project'ов</span>
                </div>
            </div>
        </div>
    );
}
