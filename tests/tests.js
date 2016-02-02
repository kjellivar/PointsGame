
describe('SideCtrl', function(){

    beforeEach(module('PointsGame'));

    describe('newGame()', function(){
        it('should reset items clicked and total score', inject(function($controller){
            var sideCtrl = $controller('SideCtrl', {
                Points: {
                    items: [1,2,3],
                    total: 3,
                    reset: function(){
                        this.items = [];
                        this.total = 0
                    },
                    getItems: function(){ return this.items },
                    getTotal: function(){ return this.total }
                }
            });

            sideCtrl.total = 5;
            sideCtrl.items = [1,2,3,4,5];

            sideCtrl.newGame();

            sideCtrl.total.should.equal(0);
            sideCtrl.items.length.should.equal(0);
        }))
    })
});

describe('Points', function(){

    var Points;

    beforeEach(module('PointsGame'));
    beforeEach( inject( function(_Points_){
        Points = _Points_;
    }));

    describe('Initial state', function(){
        it('should have empty totals', function(){
            var total = Points.getTotal();
            total.score.should.equal(0);
            total.bonus.should.equal(0);
        });
        it('should have empty items dictionary', function(){
            var items = Points.getItems();
            items.should.be.an('object');
            items.should.be.empty;

        });
    });

    describe('reset()', function(){
        it('should set total scores to 0', function(){
            var total;
            Points.score('A', {points: 30, bonus:30, every: 1});
            Points.reset();
            total = Points.getTotal();
            total.score.should.equal(0);
            total.bonus.should.equal(0);

        });
    });

    describe('score()', function(){
        var pointsItem = {points:30,bonus:90,every:2};
        var pointsItem2 = {points:50,bonus:200,every:3};

        it('should increase total by item points', function(){
            Points.score('A', pointsItem);
            var total = Points.getTotal();
            total.score.should.be.equal(pointsItem.points);
        });
        it('should add bonus points to total score', function(){
            Points.score('A', pointsItem); //30
            Points.score('B', pointsItem2); //50
            Points.score('A', pointsItem); //60
            Points.score('B', pointsItem2); //50
            Points.score('B', pointsItem2); //100
            var total = Points.getTotal();
            total.score.should.be.equal(290);
        });
        it('should keep track of bonus points', function(){
            Points.score('A', pointsItem); //30
            Points.score('B', pointsItem2); //50
            Points.score('B', pointsItem2); //50
            Points.score('A', pointsItem); //30 - bonus 30
            Points.score('B', pointsItem2); //50 - bonus 50
            var total = Points.getTotal();
            total.bonus.should.be.equal(80);
        });
        it('should keep track of quantity of items', function(){
            Points.score('A', pointsItem);
            Points.score('B', pointsItem2);
            Points.score('B', pointsItem2);
            Points.score('C', pointsItem2);
            Points.score('A', pointsItem);
            Points.score('B', pointsItem2);
            var items = Points.getItems();
            items.A.quantity.should.be.equal(2);
            items.B.quantity.should.be.equal(3);
            items.C.quantity.should.be.equal(1);
        });
    });
});