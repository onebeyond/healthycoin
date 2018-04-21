import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './style.scss';


export default props => {


  return (
    <footer id="Footer">
      <div className="listContainer">
                <ul className="ulFooter">
                <li>
                <a href="#">Terms and conditions</a>
              </li>
              <li>
                <a href="#">Doctors</a>
              </li>
              <li>
                <a href="#">Patients</a>
              </li>
                </ul>
</div>
<div className="listContainer">
                <ul className="ulFooter">
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Sitemap</a>
                  </li>
                  <li>
                    <a href="#">Rewards</a>
                  </li>
                </ul>
</div>
    </footer>
  );
};
