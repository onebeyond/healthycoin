import React from 'react';
import styles from './Layout.scss';

export default props => {
  return (
    <div className={styles.layout}>{props.children}</div>
  );
};
