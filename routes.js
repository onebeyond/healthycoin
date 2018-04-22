const routes = require('next-routes')();

routes
  .add('/admin', '/admin/index')
  .add('/admin/add-doctor', '/admin/addDoctor')
  .add('/admin/analysis-metrics', '/admin/analysisMetrics')
  .add('/doctor/submit-analysis', '/doctor/submitAnalysis')
  .add('/doctor/submit-thresholds', '/doctor/submitThresholds')
  .add('/doctor/add-patient', '/doctor/addPatient')
  .add('/owner/add-admin', '/owner/addAdmin');

module.exports = routes;
