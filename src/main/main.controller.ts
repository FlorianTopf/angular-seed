'use strict';

export default class MainController {
    static $inject: string[] = [
        '$state',
        '$log'
    ];

    stateObject: {};

    constructor (
        private $state: ng.ui.IStateService,
        private $log: ng.ILogService
    ) {
        this.$log.info($state.current.name);

        this.stateObject = {
            property: 1
        };
    }
}

