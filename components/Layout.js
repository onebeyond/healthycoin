import React from 'react';

import Header from './Header';
import Footer from './Footer';
import styles from './Layout.scss';

export default props => {
  return (
    <div className={styles.layout}>
      <Header role="admin" />
      {props.children}
      <Footer />
    </div>
  );
};
