import React from 'react';
import {
  Grid,
  Row,
  Col,
  Form,
  FormGroup,
  FormControl,
  HelpBlock,
  ControlLabel,
  Button
} from 'react-bootstrap';
import ListAnalysis from '../../admin/analysis-metrics';
import index from '../../admin/analysis-metrics';
import web3 from '../../../ethereum/web3';
import HealthSystem from '../../../ethereum/healthSystem';

const matchArr = {
  1: 'cholesterol',
  2: 'sugar',
  3: 'blood_pressure',
  4: 'heart_rate',
  5: 'saturated_fat',
  6: 'hematocrits',
  7: 'chreatin',
  8: 'hemoglobin'
};
export default class SubmitAnalisys extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputsChange = this.handleInputsChange.bind(this);
    this.state = {
      patient_address: '',
      patient_date: '',
      cholesterol: '',
      sugar: '',
      blood_pressure: '',
      heart_rate: '',
      saturated_fat: '',
      hematocrits: '',
      chreatin: '',
      hemoglobin: ''
    };
  }

  async handleSubmit(event) {
    event.preventDefault();
    const stateShallow = this.state;
    const indicators = Object.keys(matchArr);
    const values = Object.keys(stateShallow)
      .map(function(key, index) {
        if (key !== 'patient_address' && key !== 'patient_date') {
          return parseInt(stateShallow[key]);
        }
      })
      .filter(key => key != undefined);
    const addressPatient = stateShallow.patient_address;
    const year = stateShallow.patient_date.substring(0, 4);
    const month = stateShallow.patient_date.substring(6, 7);
    const day = stateShallow.patient_date.substring(9, 10);
    const score = Math.floor(Math.random() * 6) + 1;
    const reward = Math.floor(Math.random() * 6) + 1;

    try {
      const accounts = await web3.eth.getAccounts();
      await HealthSystem.methods
        .addPatient(addressPatient)
        .send({ from: accounts[0] });
      await HealthSystem.methods
        .addAnalysis(
          indicators,
          values,
          addressPatient,
          day,
          month,
          year,
          score,
          reward
        )
        .send({ from: accounts[0] });
    } catch (err) {
      console.log(err);
    }
  }

  handleInputsChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState(() => {
      return { [name]: value };
    });
  }

  render() {
    return (
      <div>
        <Row className="show-grid">
          <form onSubmit={this.handleSubmit}>
            <FormGroup>
              <ControlLabel>Submit Analysis</ControlLabel>
              <FormControl
                type="text"
                placeholder="Patient"
                name="patient_address"
                value={this.state.patient_address}
                onChange={this.handleInputsChange}
              />
              <FormControl.Feedback />
              <HelpBlock>
                Please be sure partient is an ethereum address.
              </HelpBlock>
              <FormControl
                type="date"
                placeholder="Date"
                name="patient_date"
                value={this.state.patient_date}
                onChange={this.handleInputsChange}
              />
              <FormControl.Feedback />
              <HelpBlock>Format Date YYYY/MM/DD</HelpBlock>
              <ListAnalysis handleChange={this.handleInputsChange} />
            </FormGroup>
            <Button className="pull-right" bsStyle="info" type="submit">
              Submit Analysis
            </Button>
          </form>
        </Row>
      </div>
    );
  }
}
