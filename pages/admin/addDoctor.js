import React, { Component } from 'react';
import '../../styles/bootstrap.scss';

import Layout from '../../components/commons/Layout';
import AddDoctor from '../../components/admin/add-doctor/AddDoctor'

export default class AddDoctorPage extends Component {
  render() {
    return (
      <Layout>
        <AddDoctor/>
      </Layout>
    );
  };
};
