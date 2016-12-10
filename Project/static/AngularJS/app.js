var EdulutionApp = angular.module("mainApp",['ui.bootstrap','ngRoute','ngCookies']);
EdulutionApp.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
});


EdulutionApp.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}]);

