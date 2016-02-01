(function () {
    'use strict';

    function SideCtrl(Points) {
        var sideCtrl = this;

        sideCtrl.newGame = function () {
            Points.reset();
            sideCtrl.items = Points.getItems();
            sideCtrl.total = Points.getTotal();
        };

        sideCtrl.newGame();
    }

    angular.module('PointsGame')
        .controller('SideCtrl', SideCtrl);
})();
