'use strict';

export default class MainController {
    static $inject: string[] = [
        '$state',
        '$log'
    ];

    constructor (
        private $state: ng.ui.IStateService,
        private $log: ng.ILogService
    ) {
        this.$log.info($state.current.name);
    }

    protected dmAction (): void {
        console.log('HELLO');
    }
}

