import React, { Component } from 'react';
import Layout from '../components/Layout';
import Dashboard from '../components/dashboard/Dashboard';

class DashboardPage extends Component {
  render() {
    return (
      <Layout>
        <Dashboard/>;
      </Layout>
    );
  };
};

export default DashboardPage;
