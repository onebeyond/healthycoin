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
  Button,
  Glyphicon
} from 'react-bootstrap';
import ListAnalysis from '../../admin/analysis-metrics';
import index from '../../admin/analysis-metrics';
import web3 from '../../../ethereum/web3';
import healthSystem from '../../../ethereum/healthSystem';
import patientRecords from '../../../server/mocks/patient-list-records.json';

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
export default class ListRecords extends React.Component {
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
      hemoglobin: '',
      loading: false
    };
  }

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    console.log(`accounts: ${accounts}`);
    const myRole = await healthSystem.methods.getMyRole().call({ from: accounts[0] });
    const numOfRecords = await healthSystem.methods.getNumberAnalysis(accounts[0]).call({ from: accounts[0] });
    console.log(`numOfRecords: ${Object.keys(numOfRecords)}`);
    // this.setState({ account: accounts[0], numOfRecords });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const stateShallow = this.state;
    const indicators = Object.keys(matchArr);
    const values = Object.keys(stateShallow)
      .map(function(key, index) {
        if (
          key !== 'patient_address' &&
          key !== 'patient_date' &&
          key !== 'loading'
        ) {
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

    this.setState(() => {
      return { loading: true };
    });
    try {
      const accounts = await web3.eth.getAccounts();
      await healthSystem.methods
        .addPatient(addressPatient)
        .send({ from: accounts[0] });
      await healthSystem.methods
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
    this.setState(() => {
      return { loading: false };
    });
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
        <p>Expected num of records</p>
      </div>
    );
  }
}
