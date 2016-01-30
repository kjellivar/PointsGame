(function(){
    'use strict';

    //Directive definition
    function pointsGameItem(){

        return {
            scope: true,
            controller: pointsGameItemCtrl,
            controllerAs: 'ctrl',
            bindToController: {
                points: '@',
                bonus: '@',
                every: '@'
            },
            template: '<h1>{{ctrl.points}}</h1>'
        };
    }

    //Directive controller
    function pointsGameItemCtrl(){
        var self = this;
        console.log(this);
    }

    angular.module('PointsGame')
        .directive('pointsGameItem', pointsGameItem);


})();