
// --- gulpfile.js : le fichier complet ---.

// SOURCES => http://stefanimhoff.de/2014/gulp-tutorial-1-intro-setup/
// GIT => https://github.com/kogakure/gulp-tutorial


// on individualise les tâches pour ne pas se retrouver avec un seul énorme fichier gulpfile
var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });

/*
// ---------------------- TOUT CE QUI VIENT APRES DOIT ËTRE REDISPATCHER DANS DES SOUS-DOSSIERS DE TÄCHES ./GULP/TASKS -------------------------

// Déclaration variables / dépendances
var gulp        = require('gulp'),					// GULP
	rename      = require('gulp-rename'),			// Renommage des fichiers
	sass        = require('gulp-sass'),				// Conversion des SCSS en CSS
	minifyCss   = require('gulp-minify-css'),		// Minification des CSS
	uglify      = require('gulp-uglify'),			// Minification/Obfuscation des JS
	plumber     = require('gulp-plumber'),			// Ne pas s'arrêter en cas d'erreurs
	jshint      = require('gulp-jshint'),			// Lint JS
	browsersync = require('browser-sync').create(),	// Utilisation de browser sync pour mettre à jour les navigateur
	imagemin    = require('gulp-imagemin'),			// optimisation image
	concat		= require('gulp-concat'),			// Concatenation
	notify		= require('gulp-notify'),			// Show notify error
	autoprefixer= require('gulp-autoprefixer'),		// Prefixer les règles css pour les différents navigateurs
	cssnano		= require('gulp-cssnano'),
	sourcemaps  = require('gulp-sourcemaps'),
	postcss		= require('gulp-postcss'),
	del			= require('del');					// Supprimer le fichiers pour repartir d'un build propre


// INIT CONFIG - Définition de la configuration initial - TODO



// CSS TASK
gulp.task('css', function()
{
	return gulp.src('scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'));
});

// LINT JS TASK
gulp.task('lint', function() {
	return gulp.src('js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// CONCATENATE - MINIFY JS
gulp.task('scripts', function() {
	return gulp.src('js/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist'))
		.pipe(rename('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

// IMAGES TASK
gulp.task('imagemin', function () {
	return gulp.src('img/*')
		.pipe(imagemin({
			progressive: true
		}))
		.pipe(gulp.dest('imagemin-img'));
});

// BROWSERSYNC - TODO
gulp.task('browserSync', function() {

});

// WATCH TASK
gulp.task('watch', function() {
	gulp.watch('js/*.js', ['lint', 'scripts']);
	gulp.watch('scss/*.scss', ['sass']);
});

// DEFAULT TASK
gulp.task('default', ['sass', 'watch']);
gulp.task('js', ['lint', 'scripts', 'watch']);
gulp.task('all', ['default', 'js']);
gulp.task('bs', ['browserSync', 'default']);

*/