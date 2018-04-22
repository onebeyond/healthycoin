const routes = require('next-routes')();

routes
  .add('/admin', '/admin/index')
  .add('/admin/add-doctor', '/admin/addDoctor')
  .add('/admin/add-patient', '/admin/addPatient')
  .add('/doctor/submit-analysis', '/doctor/submitAnalysis')
  .add('/patient/analysis-details', '/patient/analysisMetrics')
  .add('/patient/index', '/patient/withdraw')
  .add('/owner/add-admin', '/owner/addAdmin')
  .add('/patient/list-records', '/patient/listRecords');

module.exports = routes;
