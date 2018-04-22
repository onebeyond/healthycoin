import React, { Component } from 'react';
import {
  ListGroup,
  ListGroupItem,
  FormControl,
  FormGroup,
  ControlLabel,
  Button
} from 'react-bootstrap';
import './style.scss';

import mockAnalysis from '../../../server/mocks/user-analysis.json';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default props => {
  let { handleChange, isForm } = props;
  return (
    <div>
      {!isForm && (
        <div style={{ marginTop: '50px' }}>
          <div className="row">
            <div className="col-sm-2">
              <FieldGroup
                id="formControlsText"
                type="text"
                label="Doctor number"
                disabled={true}
                placeholder="0x49cE8B03D57004Bdca44B5504912B8d23fFe92CC"
              />
            </div>
            <div className="col-sm-2">
              <FieldGroup
                id="formControlsText"
                type="text"
                label="Patient"
                disabled={true}
                placeholder="0xCaE72709cBb872d3Eb77E7295CF432CB0c67343a"
              />
            </div>
            <div className="col-sm-2">
              <FieldGroup
                id="formControlsText"
                type="text"
                label="Date"
                disabled={true}
                placeholder="22/04/2018"
              />
            </div>
            <div className="col-sm-2" />
            <div className="col-sm-2" />
            <div class="col-sm-2">
              <label>Results</label>
              <p
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  fontStyle: 'normal',
                  fontStretch: 'normal',
                  lineHeight: 'normal',
                  letterSpacing: 'normal',
                  textAlign: 'left',
                  color: '#13c1ac'
                }}
              >
                85 % Threshold
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <Button
                style={{
                  borderRadius: '3px',
                  backgroundColor: '#ffffff',
                  border: 'solid 1px #41b6a6'
                }}
              >
                <a>Doctor notes</a>
              </Button>
            </div>
            <div className="col-sm-2">
              <Button
                style={{
                  borderRadius: '3px',
                  backgroundColor: '#ffffff',
                  border: 'solid 1px #41b6a6'
                }}
              >
                <a>Analysis Report</a>
              </Button>
            </div>
            <div className="col-sm-2" />
            <div className="col-sm-2" />
            <div className="col-sm-2" />
            <div className="col-sm-2">
              <label>Rewars this month</label>
              <p
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  fontStyle: 'normal',
                  fontStretch: 'normal',
                  lineHeight: 'normal',
                  letterSpacing: 'normal',
                  textAlign: 'left',
                  color: '#13c1ac'
                }}
              >
                + 0, 00085$
              </p>
            </div>
          </div>
        </div>
      )}
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
                  margin: 'auto',
                  textIndent: '14px'
                }}
              >
                {indicator.category.charAt(0).toUpperCase() +
                  indicator.category.slice(1)}
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
                    {isForm && (
                      <FormControl
                        type="text"
                        placeholder="Quantity"
                        name={indicator.key}
                        onChange={handleChange}
                        id="customFormControl"
                      />
                    )}
                    {!isForm && <p>{indicator.value}</p>}
                  </div>
                </div>
              </ListGroupItem>
            </div>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};
