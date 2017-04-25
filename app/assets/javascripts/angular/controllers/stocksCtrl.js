// app.controller('stocksCtrl', ['$scope', function($scope) {

// 	$scope.message = 'Stocks Controller';

// 	$scope.stocks = Stock.query();
// }]);

app.controller('stocksCtrl', ['$scope', 'Stock', function($scope, Stock) {
	$scope.message = 'Stocks Controller Working';

	// var Stocks = $resource('/api/stocks');

	$scope.stocks = Stock.all();
}]);