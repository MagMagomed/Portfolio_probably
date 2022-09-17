import { Component } from 'react';
import { FaEnvelope, FaGithub } from "react-icons/fa";
import React from 'react';
import './../css/Home.css';
import './../css/list.css';
import './../css/Contact.css';
import './../css/animation.css';

export const Contacts: React.FC<any> = () => {
    //
    //            <img src="https://otkritkis.com/wp-content/uploads/2021/12/56054-prostranstvo-pautina-uzor-liniya-cifrovoe_iskusstvo-1920x1080-1.jpg" alt="Cyberpunk" class="home-img-background" />
    return (
        <div className="home">
            <div className="home-content">
                <div className="def-heading">
                    <h2>Связь</h2>
                </div>
                <div className="home-subheading">
                    <p>Я открыт для коммерческих предложение</p>
                </div>
                <div className="contact-body">
                    <table className='contact-table'>
                        <tr className='contact-table-tr'>
                            <td className='contact-table-td'>Email:</td>
                            <td className='contact-table-td-data'><a href="mailto:mmagomedos@yandex.ru" className='contact-table-td-link'> <FaEnvelope /> mmagomedos@yandex.ru</a></td>
                        </tr>
                        <tr className='contact-table-tr'>
                            <td className='contact-table-td'>Github:</td>
                            <td className='contact-table-td-data'><a href="https://github.com/MagMagomed" target="_blank" className='contact-table-td-link'> <FaGithub /> https://github.com/MagMagomed</a></td>
                        </tr>
                    </table>
                    
                </div>
            </div>
        </div>
    );
}
