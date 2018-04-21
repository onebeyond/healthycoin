import React, { Component } from 'react';
import Layout from '../../components/commons/Layout/index';
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
