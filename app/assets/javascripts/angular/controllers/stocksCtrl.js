app.controller('stocksCtrl', ['$scope', '$filter', 'Stock', function($scope, $filter, Stock) {

	$scope.message = 'Stocks Controller Working';

	$scope.stocks = Stock.all();

	$scope.deleteStock = function(id, index) {
		$scope.stocks.splice(index, 1);
		return Stock.delete(id);
	};

	$scope.createStock = function() {
		var attr = {};
		attr.symbol = $filter('uppercase')($scope.newCompany);
		var newStock = Stock.create(attr);
		$scope.stocks.push(newStock);
		$scope.newCompany = '';
	};
}]);