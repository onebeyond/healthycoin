import React, { Component } from 'react';
import './style.scss';

import DashCard from '../../commons/DashCard';
import { Grid, Row, Col } from 'react-bootstrap';

export default class IndexDash extends Component {
  static async getInitialProps() {
    const accounts = await web3.eth.getAccounts();
    console.log('accounts', accounts);
    return { accounts };
  };

  render() {
    return (
      <Grid className={'wrapper-all-dash'}>
        <Row>
          <Col md={6}>
            <div className={'wrapper-dashcard wrapper-dashcard-odd'}>
              <DashCard icon="a" label="3" subLabel="Administrators" customStyle={'dashcard-tread'} />
            </div>
          </Col>
          <Col md={6}>
            <div className={'wrapper-dashcard'}>
              <DashCard icon="a" label="3" subLabel="Doctors" customStyle={'dashcard-tread'} />
            </div>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={6}>
            <div className={'wrapper-dashcard wrapper-dashcard-odd'}>
              <DashCard icon="a" label="3" subLabel="Patients" customStyle={'dashcard-tread'} />
            </div>
          </Col>
          <Col md={6}>
            <div className={'wrapper-dashcard'}>
              <DashCard icon="a" label="3" subLabel="Analysis submitted" customStyle={'dashcard-tread'} />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

