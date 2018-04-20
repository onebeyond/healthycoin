import React, { Component } from 'react';
import {
  VictoryBar, VictoryChart, VictoryAxis, VictoryArea,
  VictoryPolarAxis, VictoryTheme, VictoryPie, VictoryLine
} from 'victory';

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

const data2 = [
  {quarter: 1, earnings: 7000},
  {quarter: 2, earnings: 7500},
  {quarter: 3, earnings: 8250},
  {quarter: 4, earnings: 10000}
];

export default () => {

  const CategoryPercentage = () => (
    <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
      <VictoryAxis tickValues={[1, 2, 3, 4]} tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}/>
      <VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 1000}k`)} />
      <VictoryBar data={data} x="quarter" y="earnings"/>
    </VictoryChart>
  );

  const Chart2 = () => (
    <VictoryChart polar domain={{ y: [0, 25000]}} theme={VictoryTheme.material}>
      <VictoryPolarAxis dependentAxis style={{ axis: { stroke: "none" } }} tickFormat={() => null}/>
      <VictoryPolarAxis/>
      <VictoryLine
        data={data}
        x="quarter"
        y="earnings"
        style={{
          data: { stroke: "#c43a31" },
        }}
      />
    </VictoryChart>
    // <VictoryChart polar theme={VictoryTheme.material}>
    //   <VictoryArea data={data} x="quarter" y="earnings"/>
    //   <VictoryPolarAxis/>
    // </VictoryChart>
  );

  const Chart3 = () => (
    <VictoryPie innerRadius={100} data={data} x="quarter" y="earnings"/>
  );

  const Chart4 = () => (
    <VictoryChart>
      <VictoryLine data={data} x="quarter" y="earnings"/>
      <VictoryLine data={data2} x="quarter" y="earnings"/>
    </VictoryChart>
  );

  return (
    <div>
    //   <CategoryPercentage/>
    //   <Chart2/>
    //   <Chart3/>
    //   <Chart4/>
    </div>
  );
}
