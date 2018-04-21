const routes = require('next-routes')();

routes
  .add('/admin', '/admin/index')
  .add('/admin/add-doctor', '/admin/addDoctor')
  .add('/admin/analysis-metrics', '/admin/analysisMetrics')
  .add('/doctor/submit-analysis/', '/admin/submitAnalysis')
  .add('/owner/add-admin', '/owner/addAdmin');

module.exports = routes;
