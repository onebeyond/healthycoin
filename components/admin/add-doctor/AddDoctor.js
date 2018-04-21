import React from 'react';
import { Grid, Row, Col, Form, FormGroup, FormControl, HelpBlock, ControlLabel } from 'react-bootstrap';

export default class AddDoctor extends  React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);
        this.getValidationState = this.getValidationState.bind(this);

        this.state = {
          value: ''
        };
      }

      getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
      }

      handleChange(e) {
        this.setState({ value: e.target.value });
      }

   render() {
      return (
        <div>
        <Row className="show-grid">
        <form>
              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
              >
                <ControlLabel>Working example with validation</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Enter text"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
              </FormGroup>
            </form>
        </Row>
      </div>);
   }
}
