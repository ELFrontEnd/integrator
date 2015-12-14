(function(){
		"use strict";

var src               = 'app';
//var build             = 'build';
//var development       = 'app/build';
//var production        = 'app/dist';
//var srcAssets         = 'app/_assets';
//var developmentAssets = 'build/assets';
//var productionAssets  = 'build/production/assets';

var development       = 'app/build';
var distribution      = 'app/dist';

//module.exports = function(Gulp){
module.exports = {

	// Configuration initial de gulp
	//Gulp.initConfig({
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
		},
		sass: {
			src:  development + '/scss/**/*.{sass,scss}',
			dest: distribution + '/css',
			options: {
				noCache: true,
				compass: false,
				bundleExec: true,
				sourcemap: true
			}
		},
		autoprefixer: {
			browsers: [
				'last 2 versions',
				'safari 5',
				'ie 8',
				'ie 9',
				'opera 12.1',
				'ios 6',
				'android 4'
			],
			cascade: true
		}
	};
	//});

/*
	// On ajoute la gestion d'un fichier externe de configuration en json à la racine du projet
	// lecture du fichier de configuration
	if (Gulp.file.exists('config.json')) {
		Gulp.config.merge(Gulp.file.readJSON('config.json'));
	}
	// --sass=..., --css=... et --site=... sont prioritaires par rapport au fichier de configuration
	var options = {};
	['sass','css', 'site'].forEach(function(arg) {
		if (Gulp.option(arg)) {
			options[arg] = Gulp.option(arg);
		}
	});
	// mise à jour de la configuration par rapport aux options passées en ligne de commande
	Gulp.config.merge({
		cfg: options
	});


};
*/



})();