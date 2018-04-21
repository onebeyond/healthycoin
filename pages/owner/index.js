import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../../styles/bootstrap.scss';
import { Link } from '../../routes';
import Layout from '../../components/commons/Layout';

export default class OwnerIndex extends Component {
  render() {
    return (
      <Layout>
        <h3>Owner page!!</h3>
        <Link route="/owner/addAdmin">
          <Button><a className="item">Add admins</a></Button>
        </Link>
      </Layout>
    );
  }
};
