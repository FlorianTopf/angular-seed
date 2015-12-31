'use strict';

interface IHelloScopeContent {
    welcome: string;
    dmAction: () => void;
}

interface IHelloScope extends ng.IScope {
    helloDir: IHelloScopeContent;
}

export default class Hello implements ng.IDirective {
    constructor(
    ) {
        return this.create();
    }

    public controller ($scope: IHelloScope) {
        let scope: IHelloScopeContent = $scope.helloDir;
        scope.welcome = 'HelloWorld';
        scope.dmAction();
    }

    private create (): any {
        return {
            controller: ($scope: IHelloScope) => this.controller($scope),
            bindToController: true,
            controllerAs: 'helloDir',
            restrict: 'EA',
            scope: {
                dmAction: '&'
            },
            templateUrl: 'hello/hello.html'
        };
    }
}
