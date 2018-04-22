import React from 'react';
import {
  Row,
  FormGroup,
  FormControl,
  HelpBlock,
  ControlLabel,
  Button,
  Glyphicon,
  Label
} from 'react-bootstrap';
import web3 from '../../../ethereum/web3';
import HealthSystem from '../../../ethereum/healthSystem';

export default class Withdraw extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: '',
      loading: false
    };
  }

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    let role = await HealthSystem.methods
      .getMyRole()
      .call({ from: accounts[0] });
    this.setState = ({
      patientBalance: 2000
    });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true });

    try {
      const accounts = await web3.eth.getAccounts();
      await HealthSystem.methods
        .addPatient(this.state.value)
        .send({ from: accounts[0] });
    } catch (err) {
      console.log(err);
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <div>
        <Row className="show-grid">
          <form
            onSubmit={this.onSubmit}
            style={{
              margin: '50px',
              background: '#ffffff90',
              padding: '50px',
              borderRadius: '15px',
              alignItems: 'center'
            }}>
            <h1> {this.state.patientBalance} 2 ETH </h1>
            <Button bsStyle="info" type="submit">
              {this.state.loading ? (
                <Glyphicon glyph="refresh" className={'animateSpinner'} />
              ) : (
                ''
              )}{' '}
              Withdraw
            </Button>
          </form>
        </Row>
      </div>
    );
  }
}
