const routes = require('next-routes')();

routes
  .add('/admin', '/admin/index')
  .add('/admin/add-doctor', '/admin/addDoctor')
  .add('/doctor/submit-analysis', '/doctor/submitAnalysis')
  .add('/doctor/add-patient', '/doctor/addPatient')
  .add('/patient/analysis-details', '/patient/analysisMetrics')
  .add('/owner/add-admin', '/owner/addAdmin');

module.exports = routes;
