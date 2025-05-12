'use strict';

// Angular module
var merchantApp = angular.module('merchantApp', ['ngRoute']);

// Configuration
merchantApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/product.html',
            controller: 'ProductController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]); 