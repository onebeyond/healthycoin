import React, { Component } from 'react';
import DashCard from '../../commons/DashCard';
import { Grid, Row, Column } from 'react-bootstrap';

export default class IndexDash extends Component {
  static async getInitialProps() {
    const accounts = await web3.eth.getAccounts();
    console.log('accounts', accounts)
    return { accounts };
  };
  
  render() {
    return (
      <Grid>
        <div>
          <div md={6}>
            <DashCard icon="a" label="3" subLabel="Adminastrators" />
          </div>
          <div md={6}>
            <DashCard icon="a" label="3" subLabel="Doctors" />
          </div>
        </div>
        <div>
          <div md={6}>
            <DashCard icon="a" label="3" subLabel="Patients" />
          </div>
          <div md={6}>
            <DashCard icon="a" label="3" subLabel="Analysis submitted" />
          </div>
        </div>
      </Grid>
    );
  }
}

