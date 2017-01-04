app.controller('MainController', ['$scope', function ($scope) {
    $scope.title = 'This month\'s best sellers';
    $scope.promo = "The most popular books of this month";
    $scope.plusOne = function(index) {
        $scope.products[index].likes += 1;
    };
    $scope.products = [
        {name: 'The Book of Trees', 
        price: 19, 
        likes:0,
        pubdate: new Date('2014', '03', '08'), 
        cover: 'img/the-book-of-trees.jpg' 
        }, 
        { 
    name: 'Program or be Programmed', 
    price: 8, 
    likes:0,
    pubdate: new Date('2013', '08', '01'), 
    cover: 'img/program-or-be-programmed.jpg' },
    {name: 'Harry Potter and the Cursed Child', 
        price: 17.99,
        likes:0,
        pubdate: new Date('2014', '12', '23'), 
        cover: 'img/hp-and-the-cursed-child.jpg' 
        }, 
        { 
    name: 'The Girl on the train', 
    price: 9.62,
    likes:0,
    pubdate: new Date('2015', '05', '1'), 
    cover: 'img/the-girl-on-the-train.jpg' }];
}]);