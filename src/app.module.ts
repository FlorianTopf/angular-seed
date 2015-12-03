'use strict';

import * as angular from 'angular';
import 'angular-ui-router';

import routes from './routes.config';
import './main/main.module';
import './hello/hello.module';
import './test/test.module';

let app: ng.IModule = angular.module(
    'app',
    [
        'ui.router',
        'main',
        'hello',
        'test',
    ]);

app.config(routes);

export default app;
