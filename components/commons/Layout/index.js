import React from 'react';
import { Grid } from 'react-bootstrap';

import Header from '../Header';
import Footer from '../Footer';
import './Layout.scss';

export default props => {
  return (
    <div className={'layout'}>
     <img className={'background-top'} src={'/static/background.png'} alt="" />
      <Header role={'admin'} />
      <Grid style={{    minHeight: 'calc(100vh - 200px)'}}>{props.children}</Grid>
      <Footer />
    </div>
  );
};
