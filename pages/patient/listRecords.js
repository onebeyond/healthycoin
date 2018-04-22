import React, { Component } from 'react';
import Layout from '../../components/commons/Layout';
import ListRecords from '../../components/patient/list-records/ListRecords';

import '../../styles/bootstrap.scss';
class ListRecordsPage extends Component {
  render() {
    return (
      <Layout>
        <ListRecords />
      </Layout>
    );
  }
}

export default ListRecordsPage;
