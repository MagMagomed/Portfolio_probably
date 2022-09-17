import { Component } from 'react';
import { FaEnvelope, FaGithub } from "react-icons/fa";
import React from 'react';
import './../css/Home.css';
import './../css/list.css';
import './../css/Contact.css';
import './../css/animation.css';

export const Offer: React.FC<any> = () => {
    //
    //            <img src="https://otkritkis.com/wp-content/uploads/2021/12/56054-prostranstvo-pautina-uzor-liniya-cifrovoe_iskusstvo-1920x1080-1.jpg" alt="Cyberpunk" class="home-img-background" />
    return (
        <div className="def-container">
            <div className='def-content'>
                <div className="def-heading">
                    <h2>Предложение</h2>
                </div>
                <div className="def-subheading">
                    <span>Краткий обзор моих скилов и опыта</span>
                </div>
                <div className="def-body">
                    <p><b>Два года</b> работы фуллстэк разработчиком.</p>
                    <br />
                    <p>
                        В последнее время занимался разработкой решений на базе <b>Microsoft Dynamic CRM 365</b> и <b>Microsoft Dynamic CRM 2011</b>.
                        Рефакторил легаси код и переносил на новую платформу (из Silverlight на React).<br />
                        .asmx/.wsdl использовать приходилось. <br />
                        Писал веб-формы .aspx. <br />
                        Работал по agile, опыт работы в Confluence есть.
                    </p>
                    <br />
                    <p>Писал Rest API функционал на базе Microsoft CRM, кроме того писал Rest API на ASP.NET Core</p>
                    <br />
                    <p><b>Года</b> опыта успешной работы удаленно.</p>
                    <br />
                    <p>Разрабатывал внутренние веб-приложения с помощью следующих технологий:</p>
                    <ul className='def-ul'>
                        <li className='def-li'>React</li>
                        <li className='def-li'>Redux</li>
                        <li className='def-li'>ASP.NET Core</li>
                        <li className='def-li'>Entity Framework</li>
                        <li className='def-li'>SQL</li>
                        <li className='def-li'>Devextreme</li>
                        <li className='def-li'>Bootstrap</li>
                    </ul>
                    <br />
                    <p>Живу в <b>Москве</b> не готов к переезду, не готов к командировкам. Рассматриваю только удаленную работу</p>
                    <p>Более подробную ифнормацию можно почитать в моем резюме на <a href="https://hh.ru/resume/d38da7d1ff05f2c8480039ed1f6e654f70386b" target={"_blank"}>hh.ru</a></p>
                </div>
            </div>
        </div>
    );
}
