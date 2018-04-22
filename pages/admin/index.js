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
        <h3>Admin page!!</h3>
        <Link route="/admin/addDoctor">
          <Button><a className="item">Add doctors</a></Button>
        </Link>
        <Link route="/admin/add-patient">
          <Button><a className="item">Add patients</a></Button>
        </Link>
        <div>
          <IndexDash />
        </div>
      </Layout>
    );
  }
};
