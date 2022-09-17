import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Contacts } from './components/Contacts';
import { Offer } from './components/Offer';
import { Portfolio } from './components/Portfolio';

import './css/custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
            <Route exact path='/Contacts' component={Contacts} />
            <Route exact path='/Offer' component={Offer} />
            <Route exact path='/Portfolio' component={Portfolio} />
      </Layout>
    );
  }
}
