'use strict';

import * as angular from 'angular';
import 'angular-ui-router';

import routes from './routes.config';
import Main from './main/main.controller';
import Hello from './hello/hello.directive';

var app: ng.IModule = angular.module('app', ['ui.router']);

app.config(routes);

app.controller('MainController', Main);

app.directive('hello', [
    () => new Hello()
]);

export default app;
