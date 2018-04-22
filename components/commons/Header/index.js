import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from '../../../routes';

export default class Header extends Component {
  navItemsRole = [
    ['/admin/addDoctor', '/admin/addPatient', '/dashboard'],
    [''],
    ['ADD DOCTOR', 'ADD PATIENT', 'DASHBOARD']
  ];

   constructor(props) {
     super(props);
     this.state = {
       role: this.props.role,
       navActive: [false, false, false]
     }
   }

 returnAddDoctor(role) {
  role = true;
  if (role) {
      return  <NavItem
          onClick={this.onClickNav}
          eventKey={1}
          href={this.navItemsRole[0][0]}
>
         {this.navItemsRole[2][0]}
        </NavItem>
  }
    return <p></p>;
  }

  returnAddPatient(role) {
    role = true;
     if (role) {
       return <NavItem
          onClick={this.onClickNav}
          eventKey={2}
          href={this.navItemsRole[0][1]}
        >
         {this.navItemsRole[2][1]}
        </NavItem>
   }
     return <p></p>;
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
           {this.returnAddDoctor(this.state.role)}
           {this.returnAddPatient(this.state.role)}
              <NavItem
              onClick={this.onClickNav}
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
