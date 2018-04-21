import React, { Component } from 'react';
import '../../styles/bootstrap.scss';
import Layout from '../../components/commons/Layout';

import Cards from '../../components/commons/Cards';

const options = [
  {route: 'a', icon: 'fonendo.png', label: 'Add Doctor'},
  {route: 'b', icon: 'fonendo.png', label: 'Add Doctor'}
]

export default class DoctorIndex extends Component {
  render() {
    return (
      <Layout>
        <h3>Doctor page!!</h3>
        <Cards options={options} />
      </Layout>
    );

  }
};
