import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from '../../../routes';

const navItemsRole = {
  admin: [
    {url: '/admin/addDoctor', label: 'ADD DOCTOR'},
    {url: '/admin/addPatient', label: 'ADD PATIENT'},
    {url: '/admin/submitThresholds', label: 'MANAGE INDICATORS'}
  ],
  doctor: [
    {url: '/doctor/submitAnalysis', label: 'SUBMIT ANALYSIS'},
    { url: '/doctor/listRecords', label: 'LIST RECORDS' }
  ],
  patient: [
    {url: '/patient/listRecords', label: 'LIST RECORDS'}
  ],
  owner: [
    {url: '/owner/analysisDetails', lable: 'ADD ADMIN'}
  ]
}

export default class Header extends Component {

  constructor(props) {
     super(props);
     console.log('props', props);
     this.state = {
       role: this.props.role,
       navActive: [false, false, false]
     }
   }

  onClickNav(event) {
    console.log('Nav');
    console.log(event);
  }
  render() {
    //const { navActive } = this.state;
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link route={"/"}>
              <a>
                <img src={"../../static/logoEther.png"} style={{ height: '45px', margin: '2px 0' }} />
             </a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>

           {this.state.role && navItemsRole[this.state.role].map((navItemValues => <NavItem
              onClick={this.onClickNav}
              href={navItemValues.url}
            >
              {navItemValues.label}
            </NavItem>))}

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};
