import React from 'react';
import { Row, FormGroup, FormControl, HelpBlock, ControlLabel, Button, Glyphicon} from 'react-bootstrap';
import './style.scss';

import web3 from '../../../ethereum/web3';
import HealthSystem from '../../../ethereum/healthSystem';

export default class AddDoctor extends  React.Component {

  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.getValidationState = this.getValidationState.bind(this);

    this.state = {
      value: '',
      loading: false,
    };
  }

  async componentDidMount(){
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    let role = await HealthSystem.methods.getMyRole().call({ from: accounts[0] });
    console.log(role);
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length == 42) return 'success';
    else if (length == 0) return 'warning';
    else if (length < 42) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true });

    try {
      const accounts = await web3.eth.getAccounts();
      await HealthSystem.methods
        .addDoctor(this.state.value)
        .send({ from: accounts[0] });
    } catch (err) {
      console.log(err);
    }

    this.setState({ loading: false });
  }

  render() {
    return (
      <div>
        <Row className="show-grid">
          <form onSubmit={this.onSubmit}
            style={{
              margin: '50px',
              background: '#ffffff90',
              padding: '50px',
              borderRadius: '15px'
            }}
          >
            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()}
            >
              <ControlLabel>Manage Doctors</ControlLabel>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter address"
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
              <HelpBlock>Please be sure your address is an ethereum address .</HelpBlock>
            </FormGroup>
            <Button bsStyle="info" type="submit">
              {this.state.loading ? <Glyphicon glyph="refresh" className={'animateSpinner'} /> : ''} Add Doctor
            </Button>
          </form>
        </Row>
      </div>
    );
  }
}
