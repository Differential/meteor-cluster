Package.describe({
  name: 'differential:cluster',
  summary: 'Start headless meteor processes.',
  version: '1.0.2',
  git: 'https://github.com/Differential/meteor-cluster'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('underscore', 'server');
  api.addFiles('cluster.js', 'server');
  api.export('Cluster', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('differential:cluster');
  api.addFiles('cluster-tests.js');
});
