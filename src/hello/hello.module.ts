'use strict';

import * as angular from 'angular';
import Hello from './hello.directive';

var hello: ng.IModule = angular.module('hello', []);

hello.directive('hello', [
    () => new Hello()
]);

export default hello;
