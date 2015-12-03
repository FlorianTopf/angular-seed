'use strict';

import * as angular from 'angular';
import Test from './test.controller';

let test: ng.IModule = angular.module('test', []);

test.controller('TestController', Test);

export default test;
