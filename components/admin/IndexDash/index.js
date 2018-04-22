import React, { Component } from 'react';
import DashCard from '../../commons/DashCard';
import { Grid, Row, Col } from 'react-bootstrap';

export default class IndexDash extends Component {
  static async getInitialProps() {
    const accounts = await web3.eth.getAccounts();
    console.log('accounts', accounts)
    return { accounts };
  };

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col md={6}>
            <DashCard icon="a" label="3" subLabel="Administrators" />
          </Col>
          <Col md={6}>
            <DashCard icon="a" label="3" subLabel="Doctors" />
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={6}>
            <DashCard icon="a" label="3" subLabel="Patients" />
          </Col>
          <Col md={6}>
            <DashCard icon="a" label="3" subLabel="Analysis submitted" />
          </Col>
        </Row>
      </Grid>
    );
  }
}

