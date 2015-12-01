'use strict';

interface IHelloScopeContent {
    welcome: string;
}

interface IHelloScope extends ng.IScope {
    vm: IHelloScopeContent;
}

export default class Hello implements ng.IDirective {
    constructor(
    ) {
        return this.create();
    }

    public controller ($scope: IHelloScope) {
        let scope: IHelloScopeContent = $scope.vm;
        scope.welcome = 'HelloWorld';
    }

    private create (): any {
        return {
            controller: ($scope: IHelloScope) => this.controller($scope),
            controllerAs: 'vm',
            restrict: 'E',
            scope: true,
            templateUrl: 'hello/hello.html'
        };
    }
}
