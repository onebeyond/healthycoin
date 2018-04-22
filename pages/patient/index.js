import React, { Component } from 'react';
import '../../styles/bootstrap.scss';
import Layout from '../../components/commons/Layout';
import Withdraw from '../../components/patient/withdraw/Withdraw';

export default class PatientIndex extends Component {
  render() {
    return (
      <Layout>
        <h3>Patient page!!</h3>
        <Withdraw/>
      </Layout>
    );
  }
};
