var src               = 'app';
//var build             = 'build';
//var development       = 'app/build';
//var production        = 'app/dist';
//var srcAssets         = 'app/_assets';
//var developmentAssets = 'build/assets';
//var productionAssets  = 'build/production/assets';

var development       = 'app/build';
var distribution      = 'app/dist';

module.exports = {
  browsersync: {
    development: {
      server: {
        // baseDir: [development, build, src]
        baseDir: [development]
      },
      port: 9999,
      files: [
        distribution + '/css/*.css',
        distribution + '/js/*.js',
        distribution + '/images/**',
        distribution + '/fonts/*'
      ]
    }
  },
  del: {
	src: [
        distribution + '/css/*.css',
        distribution + '/js/*.js',
        distribution + '/images/**',
        distribution + '/fonts/*'
	]
  }
};