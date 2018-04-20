<<<<<<< HEAD
import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
=======
import React from 'react';
>>>>>>> de382d0582571e3b7ac90b711d328dcbd1178e9e

export default props => {
  const { role } = props;

  const navItemsRole = {
    admin: ['Dashboard', 'Records', 'Challenges'],
    patient: ['oneLink', 'twoLink', 'anotherLink']
  };

  return (
    <Nav bsStyle="pills" activeKey={1}>
      {navItemsRole[role].map(link => {
        return (
          <NavItem eventKey={1} href={'/' + link}>
            {link}
          </NavItem>
        );
      })}
    </Nav>
  );
};
