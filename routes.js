const routes = require('next-routes')();

routes.add('/admin/add-doctor', '/admin/addDoctor');
routes.add('/doctor/submit-analysis/', '/admin/submitAnalysis');


module.exports = routes;
