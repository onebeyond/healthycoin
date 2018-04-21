import React, { Component } from 'react';
import { Grid, Row, Col, ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';
import {
  VictoryBar, VictoryChart, VictoryAxis, VictoryArea,
  VictoryPolarAxis, VictoryTheme, VictoryPie, VictoryLine, VictoryLegend
} from 'victory';
import './style.scss';

import {Doughnut} from 'react-chartjs-2';


const donuts1 = {
  labels: [
    ' 20 days',
    ' 10 days',
  ],
  datasets: [{
    data: [20, 10],
    backgroundColor: [
      '#D0D0D0',
      '#58BEAC'
    ],
    borderWidth: [
      0,
      0
    ],
    hoverBackgroundColor: [
      '#bbbbae',
      '#10be72'
    ],
    hoverBorderWidth: [
      0,
      0
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

const donuts2 = {
  labels: [
    ' 25 days',
    ' 5 days',
  ],
  datasets: [{
    data: [25, 5],
    backgroundColor: [
      '#D0D0D0',
      '#36A2EB'
    ],
    borderWidth: [
      0,
      0
    ],
    hoverBackgroundColor: [
      '#bbbbae',
      '#36A2EB'
    ],
    hoverBorderWidth: [
      0,
      0
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
  {month: 4, value: 67},
  {month: 5, value: 98},
  {month: 6, value: 67},
  {month: 7, value: 77},
  {month: 8, value: 76},
  {month: 9, value: 88},
  {month: 10, value: 99},
  {month: 11, value: 67},
  {month: 12, value: 98},
];

const data2 = [
  {month: 1, value: 10},
  {month: 2, value: 45},
  {month: 3, value: 82},
  {month: 4, value: 55},
  {month: 5, value: 81},
  {month: 6, value: 69},
  {month: 7, value: 46},
  {month: 8, value: 50},
  {month: 9, value: 58},
  {month: 10, value: 70},
  {month: 11, value: 56},
  {month: 12, value: 88},
];

const data3 = [
  { month: 1, value: 20 },
  { month: 2, value: 15 },
  { month: 3, value: 22 },
  { month: 4, value: 35 },
  { month: 5, value: 21 },
  { month: 6, value: 19 },
  { month: 7, value: 16 },
  { month: 8, value: 20 },
  { month: 9, value: 28 },
  { month: 10, value: 30 },
  { month: 11, value: 26 },
  { month: 12, value: 28 },
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
      style={{
        axis: { stroke: 'none' },
        ticks: { stroke: 'none'},
        tickLabels: { opacity: 0},
        grid: {
          stroke: '#f1f1f1'
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

const LinesChart = ({ data }) => (
  <VictoryChart>
    <VictoryAxis
      dependentAxis
      domain={[0, 100]}
      style={{
        axis: { stroke: 'none' },
        ticks: { stroke: '#c8c8c8' },
        tickLabels: { fontSize: 8, opacity: .3 },
        grid: {
          stroke: (t) => '#c8c8c8'
        }
      }}
    />
    <VictoryAxis
      tickFormat={(t) => timeToWord.month[t]}
      style={{
        axis: { stroke: '#d0d0d0' },
        ticks: { stroke: 'none' },
        tickLabels: { fontSize: 10, opacity: .3 },
        grid: {
          stroke: (t) => 'transparent'
        }
      }}
    />
    <VictoryLine data={data} x="month" y="value" style={{ data: { stroke: "#0c9bf9" }}} />
    <VictoryLine data={data2} x="month" y="value" style={{ data: { stroke: "#ed684a" }}} />
    <VictoryLine data={data3} x="month" y="value" style={{ data: { stroke: "#57c9c1" }}} />
    <VictoryLegend
      title="Overall"
      centerTitle
      titleOrientation="left"
      orientation="horizontal"
      gutter={20}
      data={[
        { name: "Thresholds achievements", symbol: { fill: "#0c9bf9" } },
        { name: "National spent", symbol: { fill: "#ed684a" } },
        { name: "Ethereum rewards", symbol: { fill: "#57c9c1" } }
      ]}
      style={{
        data: { fill: "blue", stroke: "black", strokeWidth: .5 },
        labels: { fill: "black", fontSize: 8 },
        title: { fontSize: 12 }
      }}
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

const WeekStats = ({ data }) => (
  <Row>
    <Col xs={6} md={6}>
      <Row>
        <div className={'topGraphicTitles'}>
          <span className={'title'}>465</span>
          <span className={'subtitle'}>Analisys Submited YTD</span>
        </div>
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
        <div className={'topGraphicTitles topGraphicTitlesDonuths'}>
          <span className={'title'}>40</span>
          <span className={'subtitle'}>Today</span>
        </div>
      </Row>
      <Row>
        <Doughnut data={donuts1} height={300} width={300} options={{tooltips: donuts1.tooltips}}/>
      </Row>
    </Col>
  </Row>
);


const MonthlyStats = ({ data }) => (
  <Row>
    <Col xs={6} md={6}>
      <Row>
        <div className={'topGraphicTitles'}>
          <span className={'title'}>4569</span>
          <span className={'subtitle'}>Patients total</span>
        </div>
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
        <div className={'topGraphicTitles topGraphicTitlesDonuths'}>
          <span className={'title'}>40</span>
          <span className={'subtitle'}>Today</span>
        </div>      
      </Row>
      <Row>
        <Doughnut data={donuts2} height={300} width={300} options={{tooltips: donuts2.tooltips}}/>
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
                <LinesChart data={scorePerMonth} />
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
                <span className={'ether-rewards'}>+1.6 eth</span>
                <span className={'ether-rewards-title'}>Rewards last month</span>
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
