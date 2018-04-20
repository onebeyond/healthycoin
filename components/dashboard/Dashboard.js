import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {
  VictoryBar, VictoryChart, VictoryAxis, VictoryArea,
  VictoryPolarAxis, VictoryTheme, VictoryPie, VictoryLine
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
  {month: 1, value: 7000},
  {month: 2, value: 7500},
  {month: 3, value: 8250},
  {month: 4, value: 10000}
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

  // const Chart4 = () => (
  //   <VictoryChart>
  //     <VictoryLine data={data} x="month" y="value"/>
  //     <VictoryLine data={data2} x="month" y="value"/>
  //   </VictoryChart>
  // );

  const MonthlyStats = ({ data }) => (
    <Grid>
      <Row className="show-grid">
        <Col xs={12} md={8}>
          <Row className="show-grid">
            <p>465</p>
          </Row>
          <Row className="show-grid">
            <CategoryPercentage data={data}/>
          </Row>
        </Col>
        <Col xs={6} md={4}>
          <Row className="show-grid">
            <p>59 this month</p>
          </Row>
          <Row className="show-grid">
            <Wheel data={data} x="month" y="value"/>
          </Row>
        </Col>
      </Row>
    </Grid>
  );

  return (
    <div>
      <Grid>
        <Row className="show-grid">
          <MonthlyStats data={scorePerMonth}/>
        </Row>
      </Grid>
      {/* <CategoryPercentage/>
      <Chart2/>
      <Chart3/>
      <Chart4/> */}
    </div>
  );
}
