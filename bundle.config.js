var paths = {
  dest: './dist'
}

var defaultConfig = {
  formats: ['es6', 'umd'],
  outputFolder: paths.dest,
  moduleNameJS: 'RedsiftCore',
  mapsDest: '.',
  externalMappings: {}
}

var bundleConfig = {
  mainJS: {
    name: 'ui-rs-core',
    indexFile: '../src/index.js' // FIXXME: has to be relative to './gulp-tasks'
  },
  styles: [{
    name: 'ui-rs-core',
    indexFile: '../src/index.import.styl'  // FIXXME: has to be relative to './gulp-tasks'
  }]
};

var bundles = [
  merge(defaultConfig, bundleConfig)
];

module.exports = bundles;

function merge(obj1, obj2) {
  var newObj = JSON.parse(JSON.stringify(obj1));
  Object.keys(obj1).forEach(function(key) { newObj[key] = obj1[key]; });
  Object.keys(obj2).forEach(function(key) { newObj[key] = obj2[key]; });
  return newObj;
}
