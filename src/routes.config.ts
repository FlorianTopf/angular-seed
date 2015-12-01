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
    });
}

export default routeProvider;
