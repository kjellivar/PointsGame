(function () {
    'use strict';

    function Points() {
        var service = this;

        var items;
        var total = {};

        var emptyScore = function () {
            total.score = 0;
            total.bonus = 0;
        };

        service.score = function (key, object) {
            if(!items[key]){
                items[key] = new Item(object);
            }

            var item = items[key];
            item.increaseQuantity();

            if(item.shouldGetBonus()){
                total.score += item.bonus;
                total.bonus += item.bonus;
            } else {
                total.score += item.points;
            }

        };

        service.reset = function () {
            emptyScore();
            items = {};
        };

        service.getItems = function () {
            return items;
        };

        service.getTotal = function () {
            return total;
        };

        service.reset();

        return service;
    }

    function Item(obj){
        angular.extend(this, obj);
        this.quantity = 0;
        this.bonusCounter = 0;
        this.scored = 0;
    }

    Item.prototype.shouldGetBonus = function(){
        if(!this.bonus){
            this.scored += this.points;
            return false;
        }

        this.bonusCounter = this.bonusCounter + 1;
        if (this.bonusCounter === this.every) {
            this.bonusCounter = 0;
            this.scored += this.bonus;
            return true;
        }

        this.scored += this.points;

        return false;
    };

    Item.prototype.increaseQuantity = function () {
        this.quantity = this.quantity + 1;
    };

    angular.module('PointsGame')
        .factory('Points', Points);

})();
