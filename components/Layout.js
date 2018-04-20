import React from 'react';

import Header from './Header';
import Footer from './Footer';
import './Layout.scss';

export default props => {
  return (
    <div className={'layout'}>
      <Header role="admin" />
      {props.children}
      <Footer />
    </div>
  );
};
