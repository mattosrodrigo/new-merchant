'use strict';

// Angular module
var merchantApp = angular.module('merchantApp', ['ngRoute']);

// Configuration
merchantApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/product/TEN-X500-42-BLK'
        })
        .when('/product/:sku', {
            templateUrl: 'app/views/product.html',
            controller: 'ProductController'
        })
        .otherwise({
            redirectTo: '/'
        });
        
    // Use HTML5 History API (removes the # from the URL)
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });
}]); 