Package.describe({
  name: 'verso:google-api',
  summary: "A Meteor library to interact with Google's API",
  version: '1.0.5',
  git: 'https://github.com/versolearning/meteor-google-api'
});

Package.on_use(function (api, where) {
  const packages = ['http', 'livedata', 'google-oauth', 'accounts-base', 'underscore', 'ecmascript'];
  if (api.versionsFrom) {
    api.versionsFrom('0.9.0');
    packages.push('mrt:q@1.0.1');
  } else {
    packages.push('q');
  }
  api.use(packages);

  api.add_files(['utils.js', 'google-api-async.js'], ['client', 'server']);
  api.add_files(['google-api-methods.js'], ['server']);

  api.export('GoogleApi', ['client', 'server']);
});

Package.on_test(function (api) {
  api.use([
    'npvn:google-api',
    'tinytest',
    'http',
    'accounts-base',
    'service-configuration',
    'underscore']);

  api.add_files('google-api-tests.js', ['client', 'server']);
});
