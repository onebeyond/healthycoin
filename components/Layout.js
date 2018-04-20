import React from 'react';

import Header from './Header';
import Footer from './Footer';
import './Layout.scss';

export default props => {
  return (
    <div className={'layout'}>
      <Header role="admin" />
      <div style={{ flex: 1 }}>{props.children}</div>
      <Footer />
    </div>
  );
};
