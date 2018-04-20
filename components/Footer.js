import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const style = {
  backgroundColor: '#F8F8F8',
  borderTop: '1px solid #E7E7E7',
  textAlign: 'center',
  padding: '20px',
  position: 'fixed',
  left: '0',
  bottom: '0',
  height: '60px',
  width: '100%'
};

const phantomStyle = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%'
};
export default props => {
  return (
    <div>
      <div style={phantomStyle} />
      <div style={style}>
        <li>Un link</li>
        <li>Un link</li>
        <li>Un link</li>
        <li>Un link</li>
      </div>
    </div>
  );
};
