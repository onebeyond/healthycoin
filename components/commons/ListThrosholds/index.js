import React from 'react';
import { ListGroup, ListGroupItem, FormControl, ControlLabel } from 'react-bootstrap';
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
        {mockAnalysis['indicators'].map((indicator, index) => (
          <div key={index}>
            <div
              className={'titlePillMedic'}
            >
              {indicator.category}
            </div>
            <ListGroupItem id="listAnalysisItem">
              <div className={'row panel-medic'}>
                <div className="col-sm-4">
                  <p className={'namePillMedic'}>{indicator.key}</p>
                </div>
                <div className="col-sm-4">
                  <ControlLabel className="col-sm-3">Bottom</ControlLabel>
                  <div className="col-sm-9">
                    <FormControl
                      type="text"
                      placeholder="Quantity"
                      name={indicator.key}
                      onChange={handleChange}
                      className={'customFormControl'}
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <ControlLabel className="col-sm-3">Top</ControlLabel>
                  <div className="col-sm-9">
                    <FormControl
                      type="text"
                      placeholder="Quantity"
                      name={indicator.key}
                      onChange={handleChange}
                      className={'customFormControl'}
                    />
                  </div>
                </div>
              </div>
            </ListGroupItem>
          </div>
        ))}
      </ListGroup>
    </div>
  );
};
