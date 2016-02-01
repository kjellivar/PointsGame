(function(){
    'use strict';

    //Directive definition
    function pointsGameItem(){

        return {
            scope: true,
            transclude: true,
            replace: true,
            controller: pointsGameItemCtrl,
            controllerAs: 'ctrl',
            bindToController: {
                value: '@',
                points: '@',
                bonus: '@',
                every: '@'
            },
            template: '<div class="col">\
                          <button ng-click="ctrl.clickHandler()" \
                          class="hvr-shrink button  button-block button-calm points-game-item">{{ctrl.value}}</button>\
                      </div>'
        };
    }

    //Directive controller
    function pointsGameItemCtrl(Points){
        var ctrl = this;

        ctrl.clickHandler = function () {
            Points.score(ctrl.value, {
                points: parseInt(ctrl.points),
                bonus: parseInt(ctrl.bonus),
                every: parseInt(ctrl.every)
            });
        };
    }

    angular.module('PointsGame')
        .directive('pointsGameItem', pointsGameItem);


})();