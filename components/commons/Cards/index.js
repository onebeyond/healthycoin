import React from 'react'

import Card from '../Card'
import './style.scss';

const Cards = ({options}) => 
  <div className="cards">
          {options.map(option =>  
            <Card 
              key={option.route} 
              route={option.route}
              icon={option.icon}
              label={option.label}/>)}
        </div>


export default Cards
