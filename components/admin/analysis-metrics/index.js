import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './style.scss';

export default () => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem>Item 1</ListGroupItem>
        <ListGroupItem>Item 2</ListGroupItem>
        <ListGroupItem>...</ListGroupItem>
      </ListGroup>;
    </div>
  );
};
