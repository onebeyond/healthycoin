import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import listItem from '../../commons/ListAnalysis';
import './style.scss';

import mockAnalysis from '../../../server/mocks/user-analysis.json';

export default () => {
  const analysisItems = mockAnalysis['indicators'].map(indicator => (
    <listItem indicator={indicator} />
  ));
  return (
    <div>
      <ListGroup>
        <analysisItems />
      </ListGroup>;
    </div>
  );
};
