import React, { Component } from 'react';

import '../styles/bootstrap.scss';
import Layout from '../components/commons/Layout/index';
import Dashboard from '../components/dashboard/Dashboard';

export default class DashboardPage extends Component {
  render() {
    return (
      <Layout>
        <Dashboard/>
      </Layout>
    );
  };
};
