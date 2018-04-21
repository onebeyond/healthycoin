import React from 'react';
import { Grid, Row, Col, Form, FormGroup, FormControl, HelpBlock, ControlLabel, Button} from 'react-bootstrap';

export default class SubmitAnalisys extends  React.Component {

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
            if (length == 42) return 'success';
            else if (length == 0) return 'warning';
            else if (length < 42) return 'error';
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
                    <ControlLabel>Manage Doctors</ControlLabel>
                    <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="Patient"
                    onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>Please be sure partient is an ethereum address.</HelpBlock>
                    <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="Date"
                    onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>Format Date YYYY/MM/DD</HelpBlock>
                </FormGroup>
                <Button bsStyle="info" type="submit">Submit Analysis</Button>
                </form>
            </Row>
        </div>);
    }
}
