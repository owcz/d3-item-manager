(function() {
    'use strict';

    angular.module('d3-item-manager').factory('itemTracking', itemTracking);

    var key = 'itemTracking';

    function itemTracking($timeout, upgradeDataStructureBeforeItemLoad, postItemLoadUpdate) {
        var tracking;
        var notifyTimer;
        return {
            load,
            save
        };

        function load() {
            upgradeDataStructureBeforeItemLoad();
            tracking = JSON.parse(localStorage.getItem(key)) || {};
            postItemLoadUpdate(tracking, saveWithoutToastr);
            return tracking;
        }

        function saveWithoutToastr() {
            localStorage.setItem(key, JSON.stringify(tracking));
        }

        function save() {
            notifySave();
            saveWithoutToastr();
        }

        function notifySave() {
            $timeout.cancel(notifyTimer);
            notifyTimer = $timeout(function() {
                toastr.success('Items saved', {timeOut: 1000});
            }, 1000);
        }
    }
})();