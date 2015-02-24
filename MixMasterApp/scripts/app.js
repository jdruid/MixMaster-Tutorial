'use strict';

var app = angular.module('MixMaster', ['ngRoute', 'ngResource', 'MixMaster.Controllers', 'MixMaster.Services']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        // Home
        .when("/", { templateUrl: "views/occasions.html", controller: "OccasionController" })
        // Pages
        .when("/occasions", { templateUrl: "views/occasions.html", controller: "OccasionController" })
        .when("/drinks/:filter/:id", { templateUrl: "views/drink-results.html", controller: "DrinkResultsController" })
        .when("/drinks/:id", { templateUrl: "views/drink-detail.html", controller: "DrinkDetailController" })

}]);


