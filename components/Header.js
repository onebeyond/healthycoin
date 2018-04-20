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
          <Navbar.Brand>Dashboard</Navbar.Brand>
          <Navbar.Brand>Welcome </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem
              //active={location.hash === '#/pool-data'}
              eventKey={2}
              href="#/pool-data"
            >
              Pool Data
            </NavItem>
            <NavItem
              //active={location.hash === '#/glea-logs'}
              eventKey={3}
              href="#/glea-logs"
            >
              Glea logs
            </NavItem>
            <NavItem
              //active={location.hash === '#/show-secrets'}
              eventKey={4}
              href="#/show-secrets"
            >
              Secrets
            </NavItem>
            <NavItem eventKey={1} /*onClick={profileLogout}*/>
              Logout
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};
