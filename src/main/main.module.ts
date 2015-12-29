'use strict';

import * as angular from 'angular';
import Main from './main.controller';

let main: ng.IModule = angular.module('main', []);

main.controller('MainController', Main);

export default main;
