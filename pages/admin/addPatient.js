import React, { Component } from 'react';
import '../../styles/bootstrap.scss';

import Layout from '../../components/commons/Layout';
import AddPatient from '../../components/admin/add-patient/AddPatient';

export default class AddPatientPage extends Component {
  render() {
    return (
      <Layout>
        <AddPatient />
      </Layout>
    );
  }
}
