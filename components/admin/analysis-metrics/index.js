import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import listItem from '../../commons/ListAnalysis';
import './style.scss';

import mockAnalysis from '../../../server/mocks/user-analysis.json';

export default () => {
  return (
    <div>
      <ListGroup style={{ marginTop: '20px' }}>
        {mockAnalysis['indicators'].map(indicator => (
          <ListGroupItem>
            <div className="row">
              <div className="col-sm-3">
                <p>{indicator.key}</p>
              </div>
              <div className="col-sm-3">
                <p>{indicator.category}</p>
              </div>
              <div className="col-sm-3">
                <p>{indicator.value}</p>
              </div>
              <div className="col-sm-3">
                <p>Here the input</p>
              </div>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>;
    </div>
  );
};
