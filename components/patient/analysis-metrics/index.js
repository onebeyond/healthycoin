import React, { Component } from 'react';
import { ListGroup, ListGroupItem, FormControl } from 'react-bootstrap';
import './style.scss';

import mockAnalysis from '../../../server/mocks/user-analysis.json';

export default props => {
  let { handleChange } = props;
  return (
    <div
      style={{
        marginTop: '20px'
      }}
    >
      <ListGroup>
        {mockAnalysis['indicators'].map(indicator => (
          <div>
            <div
              style={{
                borderRadius: '10px',
                backgroundColor: '#b6e1fd',
                width: '92%',
                margin: 'auto'
              }}
            >
              {indicator.category}
            </div>
            <ListGroupItem id="listAnalysisItem">
              <div className="row">
                <div className="col-sm-4">
                  <p>{indicator.key}</p>
                </div>
                <div className="col-sm-4">
                  <p>{indicator.range}</p>
                </div>
                <div className="col-sm-4">
                  <p>{indicator.value}</p>
                </div>
              </div>
            </ListGroupItem>
          </div>
        ))}
      </ListGroup>
    </div>
  );
};
