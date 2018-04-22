import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import web3 from '../../../ethereum/web3';
import healthSystem from '../../../ethereum/healthSystem';
import Header from '../Header';
import Footer from '../Footer';
import './Layout.scss';

const rolesPath = {
  0: 'owner',
  1: 'admin',
  2: 'doctor',
  3: 'patient',
};

export default class Layout extends Component {

  constructor(props){
    super(props)

    this.state = {
      role: -1,
      account: '',
      roleName: ''
    }
  }

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    const myRole = await healthSystem.methods.getMyRole().call({ from: accounts[0] });
    console.log("role");
    this.setState({ role: myRole, account: accounts[0], roleName: rolesPath[myRole]})
    return { accounts };
  }

  render() {
    return (
      <div className={'layout'}>
       <img className={'background-top'} src={'/static/background.png'} alt="" />
        {this.state.roleName !== '' && <Header role={this.state.roleName}/>}
        <Grid style={{ minHeight: 'calc(100vh - 200px)' }}>{this.props.children}</Grid>
        <Footer />
      </div>
    );
  }
};
