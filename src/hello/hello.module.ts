'use strict';

import * as angular from 'angular';
import Hello from './hello.directive';

let hello: ng.IModule = angular.module('hello', []);

hello.directive('hello', [
    () => new Hello()
]);

export default hello;
