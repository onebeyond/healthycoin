const routes = require('next-routes')();

routes.add('/admin/add-doctor', '/admin/addDoctor');
routes.add('/admin/analysis-metrics', '/admin/analysisMetrics');

module.exports = routes;
