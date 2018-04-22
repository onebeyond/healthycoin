const routes = require('next-routes')();

routes
  .add('/admin', '/admin/index')
  .add('/admin/add-doctor', '/admin/addDoctor')
  .add('/admin/analysis-metrics', '/admin/analysisMetrics')
  .add('/admin/add-patient', '/admin/addPatient')
  .add('/admin/submit-thresholds', '/admin/submitThresholds')
  .add('/doctor/submit-analysis', '/doctor/submitAnalysis')
  .add('/patient/analysis-details', '/patient/analysisMetrics')
  .add('/patient/index', '/patient/withdraw')
  .add('/patient/list-records', '/patient/listRecords')
  .add('/doctor/listRecords', '/patient/listRecords')
  .add('/owner/add-admin', '/owner/addAdmin');

module.exports = routes;
