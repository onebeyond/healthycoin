const routes = require('next-routes')();

routes.add('/admin/add-doctor', '/admin/addDoctor');
routes.add('/admin/analysis-metrics', '/admin/analysisMetrics');
routes.add('/doctor/submit-analysis/', '/admin/submitAnalysis');

module.exports = routes;
