import React, { Component } from 'react';
import '../../styles/bootstrap.scss';

import Layout from '../../components/commons/Layout/index';
import AddDoctor from '../../components/admin/submit-analysis/SubmitAnalysis'

export default class SubmitAnalysisPage extends Component {
    render() {
      return (
        <Layout>
          <SubmitAnalysis/>
        </Layout>
      );
    };
};
