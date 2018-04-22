import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from '../../../routes';

export default class Header extends Component {
  navItemsRole = [
    ['/admin/addDoctor', '/doctor/addPatient', '/dashboard'],
    [''],
    ['oneLink', 'twoLink', 'anotherLink']
  ];

  constructor(props) {
    super(props);
    this.state = {
      role: 'admin',
      navActive: [false, false, false]
    };
    this.onClickNav = this.onClickNav.bind(this);
  }

  onClickNav(event) {
    console.log('Nav');
    console.log(event);
  }
  render() {
    const { navActive } = this.state;
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link route="/">
              <a>
                <img src={"../../static/logo.png"} style={{ width: '50px', margin: '2px 0 0 0' }} /> 
              </a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem
              onClick={this.onClickNav}
              active={navActive[0]}
              eventKey={1}
              href={this.navItemsRole[0][0]}
            >
              ADD DOCTOR
            </NavItem>
            <NavItem
              onClick={this.onClickNav}
              active={navActive[1]}
              eventKey={2}
              href={this.navItemsRole[0][1]}
            >
              ADD PATIENT
            </NavItem>
            <NavItem
              onClick={this.onClickNav}
              active={navActive[2]}
              eventKey={3}
              href={this.navItemsRole[0][2]}
            >
              DASHBOARD
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};
