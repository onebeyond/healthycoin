import React, { Component } from 'react';
import '../styles/bootstrap.scss';
import web3 from '../ethereum/web3';
import healthSystem from '../ethereum/healthSystem';
import Layout from '../components/commons/Layout';
import Routes from "next-routes";
import { Router } from '../routes';

const rolesPath = {
  0: 'owner',
  1: 'admin',
  2: 'doctor',
  3: 'patient',
};
class HealthySystemIndex extends Component {
  static async getInitialProps() {
    const accounts = await web3.eth.getAccounts();
    console.log('accounts', accounts)
    return { accounts };
  };

  state = {
    role: -1,
    account: ''
  }

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    const myRole = await healthSystem.methods.getMyRole().call({ from: accounts[0] });
    this.setState({ role: myRole, account: accounts[0] })

    Router.pushRoute(`/${rolesPath[myRole]}/`)
  }

  render() {
    return (
      <Layout>
        <h3>Welcome to the Healthy System!!</h3>
        <p>El rol para la address {this.state.account} es {this.state.role}</p>
      </Layout>
    );
  }
}

export default HealthySystemIndex;
