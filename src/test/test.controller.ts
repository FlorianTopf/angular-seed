'use strict';

export default class TestController {
    static $inject: string[] = [
        '$state',
        '$stateParams',
        '$log'
    ];

    stateObject: {};

    constructor (
        private $state: ng.ui.IStateService,
        private $stateParams: ng.ui.IStateParamsService,
        private $log: ng.ILogService
    ) {
        this.stateObject = $stateParams['stateObject'];

        this.$log.info($state.current.name, this.stateObject);
    }
}

