(function() {
    'use strict';

    angular.module('d3-item-manager').directive('disclaimer', disclaimer);

    var disclaimerVersion = 1;
    var key = 'disclaimerRead';

    function disclaimer(){
        return {
            restrict:'E',
            scope: {},
            templateUrl: 'directives/disclaimer/disclaimer.template.html',
            controller: DisclaimerController,
            controllerAs: 'vm'
        };

        function DisclaimerController(d3Config, version){
            var vm = this;
            vm.d3Config = d3Config;
            vm.showDisclaimer= showDisclaimer;
            vm.dismiss = dismiss;
            vm.version = '';

            version.get().then(function(version){
                vm.version = version.version;
            });


            function showDisclaimer(){
                return localStorage.getItem(key) != disclaimerVersion;
            }

            function dismiss(){
                localStorage.setItem(key, disclaimerVersion);
            }
        }
    }

})();