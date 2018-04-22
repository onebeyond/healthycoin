import React, { Component } from 'react';
import Layout from '../../components/commons/Layout';
import AnalysisMetrics from '../../components/patient/analysis-metrics';
import '../../styles/bootstrap.scss';
class AnalysisMetricsPage extends Component {
  render() {
    return (
      <Layout>
        <AnalysisMetrics />;
      </Layout>
    );
  }
}

export default AnalysisMetricsPage;
