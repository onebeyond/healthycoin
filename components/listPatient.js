import React from 'react';
import { List } from 'semantic-ui-react'

function ListPatients(props){
  const {checkedDate, doctorAddress, thresholdPercentage, coins } = props;
  return (
    <List verticalAlign='middle'>
      <List.Item>
        <List.Content>
          {checkedDate}
          {doctorAddress}
          {thresholdPercentage}
          {coins}
        </List.Content>
      </List.Item>
    </List>
  )
}

export default ListPatients