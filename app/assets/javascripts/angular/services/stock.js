app.factory('Stock', ['$resource', function($resource) {
	function  Stock() {
		this.service = $resource('/api/stocks/:stockId', {
			stockId: '@id'
		});
	}
	Stock.prototype.all = function() {
		return this.service.query();
	};
	Stock.prototype.delete = function(stockId) {
		this.service.remove({
			stockId: stockId
		});
	};
	return new Stock;
}]);