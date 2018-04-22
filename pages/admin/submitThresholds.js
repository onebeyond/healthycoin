import React, { Component } from 'react';
import '../../styles/bootstrap.scss';

import Layout from '../../components/commons/Layout/index';
import SubmitThresholds from '../../components/admin/submit-thresholds/SubmitThresholds';

export default class SubmitThresholdsPage extends Component {
    render() {
      return (
        <Layout>
          <SubmitThresholds/>
        </Layout>
      );
    };
};
