import React, { Component } from 'react';
import { Grid, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import {
  VictoryBar, VictoryChart, VictoryAxis, VictoryArea,
  VictoryPolarAxis, VictoryTheme, VictoryPie, VictoryLine, VictoryLegend
} from 'victory';
import './style.scss';

const scorePerMonth = [
  {month: 1, value: 76},
  {month: 2, value: 50},
  {month: 3, value: 86},
  {month: 4, value: 57},
  {month: 5, value: 98},
  {month: 6, value: 67},
  {month: 7, value: 57},
  {month: 8, value: 76},
  {month: 9, value: 58},
  {month: 10, value: 99},
  {month: 11, value: 67},
  {month: 12, value: 98},
];

const data2 = [
  {month: 1, value: 70},
  {month: 2, value: 75},
  {month: 3, value: 82},
  {month: 4, value: 100}
];

export default () => {

  const CategoryPercentage = ({ data }) => (
    <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
      <VictoryAxis/>
      <VictoryAxis dependentAxis/>
      <VictoryBar data={data} x="month" y="value"/>
    </VictoryChart>
  );

  const Wheel = (props) => (
    <VictoryPie innerRadius={100} {...props}/>
  );

  // const Chart2 = () => (
  //   <VictoryChart polar domain={{ y: [0, 25000]}} theme={VictoryTheme.material}>
  //     <VictoryPolarAxis dependentAxis style={{ axis: { stroke: "none" } }} tickFormat={() => null}/>
  //     <VictoryPolarAxis/>
  //     <VictoryLine
  //       data={data}
  //       x="month"
  //       y="value"
  //       style={{
  //         data: { stroke: "#c43a31" },
  //       }}
  //     />
  //   </VictoryChart>
  //   // <VictoryChart polar theme={VictoryTheme.material}>
  //   //   <VictoryArea data={data} x="month" y="value"/>
  //   //   <VictoryPolarAxis/>
  //   // </VictoryChart>
  // );

  // const Chart3 = () => (
  //   <VictoryPie innerRadius={100} data={data} x="month" y="value"/>
  // );

  const LinesChart = ({ data }) => (
    <VictoryChart>
      <VictoryLine data={data} x="month" y="value"/>
      <VictoryLine data={data2} x="month" y="value"/>
      <VictoryLegend x={125} y={10}
        orientation="horizontal"
        gutter={20}
        colorScale={["navy", "blue", "cyan"]}
        data={[
          { name: "Cat 1" }, { name: "Cat 2" }
        ]}
      />
    </VictoryChart>
  );

  const Insights = ({ data }) => (
      <ListGroup>
        <ListGroupItem>Life expectancy 89 years old ^</ListGroupItem>
        <ListGroupItem>Smoking 18% daily adult smokers</ListGroupItem>
        <ListGroupItem>Alcohol 9 liters/year</ListGroupItem>
        <ListGroupItem>19% obesity</ListGroupItem>
        <ListGroupItem>Health spending 16% ^</ListGroupItem>
        <ListGroupItem>Ethereum rewards 120.5 ^</ListGroupItem>
      </ListGroup>
  );

  const MonthlyStats = ({ data }) => (
    <Row className="show-grid">
      <Col xs={6} md={6}>
        <Row className="show-grid">
          <p>465</p>
        </Row>
        <Row className="show-grid">
          <CategoryPercentage data={data}/>
        </Row>
      </Col>
      <Col xs={6} md={6}>
        <Row className="show-grid">
          <p>59 this month</p>
        </Row>
        <Row className="show-grid">
          <Wheel data={data} x="month" y="value"/>
        </Row>
      </Col>
    </Row>
  );

  return (
      <Grid>
        <Row className="show-grid">
          <Col xs={6} md={6}>
            <MonthlyStats data={scorePerMonth}/>
          </Col>
          <Col xs={6} md={6}>
            <MonthlyStats data={scorePerMonth} />
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={8} md={8}>
            <Row className="show-grid">
              <p>Overall</p>
            </Row>
            <Row className="show-grid">
              <LinesChart data={scorePerMonth} />
            </Row>
          </Col>
          <Col xs={4} md={4}>
            <Row className="show-grid">
              <p>At a glance 2017</p>
            </Row>
            <Row className="show-grid">
              <Insights data={scorePerMonth} />
            </Row>
          </Col>
        </Row>
        </Grid>
      // {/* <CategoryPercentage/>
      // <Chart2/>
      // <Chart3/>
      // <Chart4/> */}
  );
}
