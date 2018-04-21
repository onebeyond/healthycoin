import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import listItem from '../../commons/ListAnalysis';
import './style.scss';

import mockAnalysis from '../../../server/mocks/user-analysis.json';

export default () => {
  return (
    <div
      style={{
        marginTop: '20px'
      }}
    >
      <ListGroup>
        {mockAnalysis['indicators'].map(indicator => (
          <ListGroupItem id="listAnalysisItem">
            <div
              style={{
                borderRadius: '10px',
                backgroundColor: '#b6e1fd'
              }}
            >
              {indicator.category}
            </div>
            <div className="row">
              <div className="col-sm-4">
                <p>{indicator.key}</p>
              </div>
              <div className="col-sm-4">
                <p>{indicator.value}</p>
              </div>
              <div className="col-sm-4">
                <p>Here the input</p>
              </div>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>;
    </div>
  );
};
