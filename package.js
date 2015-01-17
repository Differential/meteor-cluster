Package.describe({
  name: 'differential:cluster',
  summary: 'Start headless meteor processes.',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('underscore', 'server');
  api.addFiles('cluster.js', 'server');
  api.export('Cluster', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('cluster');
  api.addFiles('cluster-tests.js');
});
