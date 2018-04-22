import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../../styles/bootstrap.scss';
import { Link } from '../../routes';
import Layout from '../../components/commons/Layout';
import IndexDash from '../../components/admin/IndexDash';


export default class AdminIndex extends Component {
  render() {
    return (
      <Layout>
        <IndexDash />
      </Layout>
    );
  }
};
