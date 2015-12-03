'use strict';

routeProvider.$inject = [
    '$stateProvider',
    '$urlRouterProvider'
];

function routeProvider (
    $stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider
) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('main', {
        controller: 'MainController',
        controllerAs: 'mainController',
        templateUrl: 'main/main.html',
        url: '/'
    }).state('test', {
        controller: 'TestController',
        controllerAs: 'testController',
        templateUrl: 'test/test.html',
        url: '/test',
        params: {
            stateObject: null
        }
    });
}

export default routeProvider;
