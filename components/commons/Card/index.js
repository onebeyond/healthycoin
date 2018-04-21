import React from 'react'

import { Button } from 'react-bootstrap';
import { Link } from '../../../routes';

import './style.scss';

const Card = ({route, icon, label}) => <Link route={route}>
  <div className="card appear">
  
  <img  src={`/static/${icon}`} alt="" />

    <h2>{label}</h2>

</div>
</Link>


export default Card
