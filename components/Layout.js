import React from 'react';
import Divider, { Container } from 'semantic-ui-react';
import Header from './Header';
import Footer from './Footer';

export default props => {
  return (
    <div>
      <Header role="admin" />
      <Container>{props.children}</Container>
      <Footer />
    </div>
  );
};
