'use strict';

module.exports = function(config) {
    //noinspection JSUnusedGlobalSymbols
    config.set({
        basePath:                 '',
        frameworks:               ['jasmine', 'fixture'],
        files:                    [
            'bower_components/angular/angular.js',
            'bower_components/underscore/underscore.js',
            'app/**/*.js',
            'tests/**/*.js',
            {
                pattern: 'items/*.json'
            }
        ],
        singleRun:                true,
        preprocessors:            {
            "app/**/*.js": ['babel'],
            "**/*.json":   ['json_fixtures']
        },
        browsers:                 ['Chrome'],
        customLaunchers:          {
            Chrome_Mini: {
                base:  'Chrome',
                flags: ['--window-size=400,200', '--window-position=-9999,0']
            }
        },
        jsonFixturesPreprocessor: {
            variableName: '__json__'
        },
        babelPreprocessor:        {
            options:        {
                sourceMap: 'inline'
            },
            filename:       function(file) {
                return file.originalPath.replace(/\.js$/, '.es5.js');
            },
            sourceFileName: function(file) {
                return file.originalPath;
            }
        }
    });
};