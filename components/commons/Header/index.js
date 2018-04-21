import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Header extends Component {
  navItemsRole = {
    admin: ['Dashboard', 'Records', 'Challenges'],
    patient: ['oneLink', 'twoLink', 'anotherLink']
  };

  constructor(props) {
    super(props);
    this.state = {
      role: 'admin'
    }
  }
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>ICONO</Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem
              eventKey={1}
              href="#/pool-data"
            >
              DOCTORS
            </NavItem>
            <NavItem
              eventKey={2}
              href="#/glea-logs"
            >
              PATIENTS
            </NavItem>
            <NavItem
              eventKey={3}
              href="#/show-secrets"
            >
              THRESHOLDS
            </NavItem>
            <NavItem eventKey={4}>
              DASHBOARD
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};
