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
      loading: false
    };
  }

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    console.log(`accounts: ${accounts}`);
    const myRole = await healthSystem.methods.getMyRole().call({ from: accounts[0] });
    console.log(`numOfRecords: ${JSON.stringify(patientRecords.items.length)}`);
    // this.setState({ account: accounts[0], numOfRecords });
  }

  render() {
    return (
      <div>
        <h3 style={{marginBottom: '50px'}}>List of analysis records: {patientRecords.items.length}</h3>
        {patientRecords.items.map((item,idx) => <RecordItem key={idx} item={item}/>)}
      </div>
    );
  }
}


const RecordItem = ({item:{date, doctor_id, score, reward}}) => 
<div className="record-item">
  <div className="record-item-date">
    <div className="record-item-date-top">{getMonth(date)} {getDay(date)}</div>
    <div className="record-item-date-bottom">{getFullYear(date)}</div>
  </div>
  <div className="record-item-doctor">Health Check by Dr. {doctor_id}</div>
  <div className="record-item-reward">
    <span style={{marginRight: '5px'}}>{score}% Threshold</span>
    <span ><img style={{width: '18px'}} src="/static/if_ETH_1175230.png" /></span>
    <span style={{marginRight: '5px'}}>{reward/1E+6}</span>
  </div>
  <div className="record-item-detail">Detail</div>
</div>
