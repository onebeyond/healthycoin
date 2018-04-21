import React, { Component } from 'react';
import Layout from '../../components/commons/Layout';
import AnalysisMetrics from '../../components/admin/analysis-metrics';

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
