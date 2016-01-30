(function () {
    'use strict';

    function MainCtrl() {
        var self = this;
        self.hei = 'Wolla';
    }

    angular.module('PointsGame')
        .controller('MainCtrl', MainCtrl);
})();
