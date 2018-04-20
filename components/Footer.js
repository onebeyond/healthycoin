import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

const style = {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  height: '60px',
  backgroundColor: '#f5f5f5'
};
export default props => {
  return (
    <Panel style={style}>
      <Panel.Footer>Panel footer</Panel.Footer>
    </Panel>
  );
};
