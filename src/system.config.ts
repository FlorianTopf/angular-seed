'use strict';

System.config({
    defaultJSExtensions: true,
    paths: {
        'angular': 'lib/angular',
        'angular-ui-router': 'lib/angular-ui-router'
    },
    meta: {
        'angular': {
            format: 'global',
            exports: 'angular'
        },
        'angular-ui-router': {
            format: 'global',
            deps: ['angular']
        }
    }
});
