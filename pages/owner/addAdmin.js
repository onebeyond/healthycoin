import React, { Component } from 'react';
import '../../styles/bootstrap.scss';

import Layout from '../../components/commons/Layout';
import AddAdmin from '../../components/owner/add-admin/AddAdmin'

export default class AddAdminPage extends Component {
  render() {
    return (
      <Layout>
        <AddAdmin />
      </Layout>
    );
  };
};
