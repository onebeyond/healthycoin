import React, { Component } from 'react';
import './style.scss';

import DashCard from '../../commons/DashCard';
import { Grid, Row, Col } from 'react-bootstrap';
import web3 from '../../../ethereum/web3';
import healthSystem from '../../../ethereum/healthSystem';

export default class IndexDash extends Component {
  static async getInitialProps() {
    const accounts = await web3.eth.getAccounts();
    console.log('accounts', accounts);

    return { accounts };
  };

  async componentDidMount() {
    console.log('componentDidMount');
    const info = await Promise.all([
      healthSystem.methods.getNumAdmins().call(),
      healthSystem.methods.getNumDoctors().call(),
      healthSystem.methods.getNumPatients().call(),
      healthSystem.methods.getTotalNumberAnalysis().call(),
    ]);

    const [admins, doctors, patients, analysis] = info;
    console.log(info)

    this.setState({ admins, doctors, patients, analysis })
  }

  state = {
    admins: 0,
    doctors: 0,
    patients: 0,
    analysis: 0,
  };

  render() {
    return (
      <Grid className={'wrapper-all-dash'}>
        <Row>
          <Col md={6}>
            <div className={'wrapper-dashcard wrapper-dashcard-odd'}>
              <DashCard icon="report.png" label={this.state.admins} subLabel="Administrators" customStyle={'dashcard-tread'} />
            </div>
          </Col>
          <Col md={6}>
            <div className={'wrapper-dashcard'}>
              <DashCard icon="report.png" label={this.state.admins}  subLabel="Doctors" customStyle={'dashcard-tread'} />
            </div>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={6}>
            <div className={'wrapper-dashcard wrapper-dashcard-odd'}>
              <DashCard icon="report.png" label={this.state.patients}  subLabel="Patients" customStyle={'dashcard-tread'} />
            </div>
          </Col>
          <Col md={6}>
            <div className={'wrapper-dashcard'}>
              <DashCard icon="report.png" label={this.state.patients}  subLabel="Analysis submitted" customStyle={'dashcard-tread'} />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

