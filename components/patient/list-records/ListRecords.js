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
        <p>{patientRecords.items.length}</p>
        {patientRecords.items.map((item,idx) => <RecordItem key={idx} item={item}/>)}
      </div>
    );
  }
}


const RecordItem = ({item:{date}}) => 
<div className="record-item">
  <div className="record-item-date">
    <div className="record-item-date-top">Day</div>
    <div className="record-item-date-bottom">Year</div>
  </div>
  <div className="record-item-doctor">Health Check by Dr. 0x536Fd5687BCDFFDE</div>
  <div className="record-item-reward">
    <span style={{marginRight: '5px'}}>85% Threshold</span>
    <span ><img style={{width: '18px'}} src="/static/if_ETH_1175230.png" /></span>
    <span style={{marginRight: '5px'}}>0.000058</span>
  </div>
  <div className="record-item-detail">Detail</div>
</div>
