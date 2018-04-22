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
import web3 from '../../../ethereum/web3';
import healthSystem from '../../../ethereum/healthSystem';
import patientRecords from '../../../server/mocks/patient-list-records.json';
import './style.scss';

const getDate = strDate => new Date(strDate)
const getDay = strDate => strDate.split('T')[0].split('-')[0]
const getMonth = strDate => new Date(strDate.split('T')[0].split('-').reverse()).toLocaleDateString('en', {month: 'short'})
const getFullYear = strDate => strDate.split('T')[0].split('-')[2]

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
      loading: false,
      listAnalysis: [],
      patientAddress: '',
    };

    this.getRecords = this.getRecords.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onAddressChange = this.onAddressChange.bind(this);
  }

  async getRecords(patientAddress) {
    console.log(patientAddress)
    const accounts = await web3.eth.getAccounts();
    this.setState({ loading: true, patient_address: patientAddress });

    try {
      const numAnalysis = await healthSystem.methods.getNumberAnalysis(patientAddress).call({ from: accounts[0] });
      console.log(numAnalysis)
      const listRetrieved = await Promise.all(
        Array(parseInt(numAnalysis)).fill().map((element, index) => {
          return healthSystem.methods.getAnalysis(patientAddress, index).call({ from: accounts[0] });
        })
      );

      const listAnalysis = listRetrieved.map((element) => (
        {
          patient: patientAddress,
          doctor: element[2],
          score: element[6],
          reward: element[7],
          unit: 'ether',
          date: `${element[3]}-${element[4]}-${element[5]}T20:30:12`
        }
      ));

      this.setState({ listAnalysis });
    } catch (err) {
      console.log(err);
    }
    this.setState({ loading: false });
  }

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    console.log(`accounts: ${accounts}`);
    const myRole = await healthSystem.methods.getMyRole().call({ from: accounts[0] });
    console.log(`numOfRecords: ${JSON.stringify(patientRecords.items.length)}`);

    console.log('myrole', myRole)
    if (myRole === '3') {
      this.getRecords(accounts[0]);
    }
  }

  onSubmit () {
    this.getRecords(this.state.patientAddress)
  }

  onAddressChange (event) {
    this.setState({ patientAddress: event.target.value });
  }

  render() {
    return (
      <div>
        <h3 style={{ marginBottom: '50px' }}>List of analysis records: {this.state.listAnalysis.length}</h3>
        {this.state.patient_address ?
          this.state.listAnalysis.map((item, idx) => <RecordItem key={idx} item={item} patient={this.state.patientAddress} />) :
          <div><input type="text" placeholder="Enter patient address" onChange={(event) => this.onAddressChange(event)} value={this.state.patientAddress} /><Button onClick={() => this.onSubmit()}>Submit</Button></div>
        }
      </div>
    );
  }
}


const RecordItem = ({item:{date, doctor, score, reward}, patient}) => 
<div className="record-item">
  <div className="record-item-date">
    <div className="record-item-date-top">{getMonth(date)} {getDay(date)}</div>
    <div className="record-item-date-bottom">{getFullYear(date)}</div>
  </div>
  <div className="record-item-doctor">Health Check by Dr. {doctor}</div>
  <div className="record-item-reward">
    <span style={{marginRight: '5px'}}>{score}% Threshold</span>
    <span ><img style={{width: '18px'}} src="/static/if_ETH_1175230.png" /></span>
    <span style={{marginRight: '5px'}}>{reward/1E+6}</span>
  </div>

  <a className="record-item-detail" href={"/patient/analysis-details"}>Detail</a>
</div>
