app.controller('MainController', ['$scope', function ($scope) {
    $scope.title = 'This month\'s best sellers';
    $scope.promo = "The most popular books of this month";
    $scope.product = {
        name: 'The Book of Trees',
        price: 19
    };
}]);