import React, { Component } from 'react';
import '../styles/bootstrap.scss';

import Layout from '../components/Layout';
import Dashboard from '../components/dashboard/Dashboard';

class DashboardPage extends Component {
  render() {
    return (
      <Layout>
        <addDoctor/>;
      </Layout>
    );
  };
};

export default DashboardPage;
