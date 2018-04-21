import React, { Component } from 'react';
import { Grid, Row, Col, ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';
import {
  VictoryBar, VictoryChart, VictoryAxis, VictoryArea,
  VictoryPolarAxis, VictoryTheme, VictoryPie, VictoryLine, VictoryLegend
} from 'victory';
import './style.scss';

import {Doughnut} from 'react-chartjs-2';


const donut = {
  labels: [
    ' 20 days',
    ' 10 days',
  ],
  datasets: [{
    data: [60, 40],
    backgroundColor: [
      '#FF6384',
      '#36A2EB'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB'
    ]
  }],
  tooltips: {
    callbacks: {
      label: function(tooltipItem, data) {
        const dataset = data.datasets[tooltipItem.datasetIndex];
        const total = dataset.data.reduce((previousValue, currentValue) => previousValue + currentValue);
        const currentValue = dataset.data[tooltipItem.index];
        const precentage = Math.floor(((currentValue/total) * 100)+0.5);
        return ' ' + precentage + '%';
      }
    }
  }
};


const scorePerDay = [
  {day: 1, value: 76},
  {day: 2, value: 50},
  {day: 3, value: 86},
  {day: 4, value: 57},
  {day: 5, value: 98},
  {day: 6, value: 67},
  {day: 7, value: 57}
];

const timeToWord = {
  day: {
    1: 'M',
    2: 'T',
    3: 'W',
    4: 'T',
    5: 'F',
    6: 'S',
    7: 'S'
  },
  month: {
    1: 'Jan',
    2: 'Fer',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec'
  }
};

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

const scoreGoals = {
  ch: [
    { name: 'ch', value: 10 },
    { name: '', value: 90 },
  ],
  gl: [
    { name: 'gl', value: 25 },
    { name: '', value: 75 },
  ],
  bp: [
    { name: 'bp', value: 30 },
    { name: '', value: 60 },
  ],
  ur: [
    { name: 'ur', value: 67 },
    { name: '', value: 33 },
  ]
};

const CategoryPercentage = (props) => (
  <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
    <VictoryAxis
      dependentAxis
      tickValues={['']}
      style={{
        axis: { stroke: 'none' },
        ticks: { stroke: 'none'},
        grid: {
          stroke: (t) => 'transparent'
        }
      }}
    />
    <VictoryAxis
      tickFormat={(t) => timeToWord[props.period][t]}
      style={{
        axis: { stroke: '#d0d0d0'},
        ticks: { stroke: 'none'},
        grid: {
          stroke: (t) => 'transparent'
        }
      }}
    />
    <VictoryBar {...props}/>
  </VictoryChart>
);

/*barRatio={0.8} cornerRadius={5} data={data} x="month" y="value" style={{
  data: {
    fill: (d) => d.x === 12 ? '#d0d0d0' : '#13c1ac',
  }
}*/
const Wheel = (props) => (
  <VictoryPie innerRadius={100} {...props}/>
);

const SpiderChart = ({ props }) => (
  <VictoryChart polar domain={{ y: [0, 25000]}} theme={VictoryTheme.material}>
    <VictoryPolarAxis dependentAxis style={{ axis: { stroke: "none" } }} tickFormat={() => null}/>
    <VictoryPolarAxis/>
    <VictoryLine
      {...props}
      style={{
        data: { stroke: "#c43a31" },
      }}
    />
  </VictoryChart>
);

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
    <ListGroupItem>Life expectancy 89 years old <Glyphicon glyph="menu-up" style={{ color: '#50e3c2' }}/></ListGroupItem>
    <ListGroupItem>Smoking 18% daily adult smokers</ListGroupItem>
    <ListGroupItem>Alcohol 9 liters/year</ListGroupItem>
    <ListGroupItem>19% obesity</ListGroupItem>
    <ListGroupItem>Health spending 16% <Glyphicon glyph="menu-down" style={{color: '#ed684a'}} /></ListGroupItem>
    <ListGroupItem>Ethereum rewards 120.5 <Glyphicon glyph="menu-up" style={{color: '#50e3c2'}} /></ListGroupItem>
  </ListGroup>
);

const MonthlyStats = ({ data }) => (
  <Row>
    <Col xs={6} md={6}>
      <Row>
        <p>465</p>
      </Row>
      <Row>
        <CategoryPercentage period={'month'} data={data} barRatio={0.8} cornerRadius={5} x="month" y="value" style={{
          data: {
            fill: (d) => d.x === 12 ? '#0c9bf9' : '#d0d0d0',
          }
        }} />
      </Row>
    </Col>
    <Col xs={6} md={6}>
      <Row>
        <p>59 this month</p>
      </Row>
      <Row>
        <Doughnut data={donut} height={300} width={300} options={{tooltips: donut.tooltips}}/>
      </Row>
    </Col>
  </Row>
);

const WeekStats = ({ data }) => (
  <Row>
    <Col xs={6} md={6}>
      <Row>
        <p>465</p>
      </Row>
      <Row>
        <CategoryPercentage period={'day'} data={data} barRatio={0.8} cornerRadius={5} x={'day'} y={'value'} style={{
          data: {
            fill: (d) => d.x === 7 ? '#13c1ac' : '#d0d0d0',
          }
        }} />
      </Row>
    </Col>
    <Col xs={6} md={6}>
      <Row>
        <p>59 this month</p>
      </Row>
      <Row>
        <Doughnut data={donut} height={300} width={300} options={{tooltips: donut.tooltips}}/>
      </Row>
    </Col>
  </Row>
);


const MonthlyGoals = ({ data }) => (
  <div>
    <Col xs={3} md={3}>
      <Wheel data={data.ch} x="month" y="value" colorScale={['#13c1ac', '#1b1b1b']}/>
    </Col>
    <Col xs={3} md={3}>
      <Wheel data={data.gl} x="month" y="value" colorScale={['#ed4c74', '#1b1b1b']}/>
    </Col>
    <Col xs={3} md={3}>
      <Wheel data={data.bp} x="month" y="value" colorScale={['#11a0ff', '#1b1b1b']}/>
    </Col>
    <Col xs={3} md={3}>
      <Wheel data={data.ur} x="month" y="value" colorScale={['#f3a1aa', '#1b1b1b']}/>
    </Col>
  </div>
);

export default class Dashboard extends Component {

  render () {
    return (
      <Grid>
        <Row className={'show-grid'}>
          <Col xs={6} md={9}>
            <Row>
              <Col xs={6} md={6}>
                <WeekStats data={scorePerDay} />
              </Col>
              <Col xs={6} md={6}>
                <MonthlyStats data={scorePerMonth} />
              </Col>
            </Row>
            <Row>
              <Col xs={8} md={8}>
                <Row>
                  <p>Overall</p>
                </Row>
                <Row>
                  <LinesChart data={scorePerMonth} />
                </Row>
              </Col>
              <Col xs={4} md={4}>
                <Row>
                  <p>At a glance 2017</p>
                </Row>
                <Row>
                  <Insights data={scorePerMonth} />
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={6} md={3}>
            <Row>
              <Col xs={12} md={12}>
                <h4>+1.6 ETH</h4>
                <h5>Rewards last month</h5>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <SpiderChart data={scoreGoals} />
              </Col>
            </Row>
            <Row>
              <Row>
                Monthly goals
              </Row>
              <Row>
                <MonthlyGoals data={scoreGoals}/>
              </Row>
            </Row>
            <Row>
              <Col xs={12} md={12}>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}
