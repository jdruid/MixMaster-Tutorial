'use strict';

angular.module('MixMaster.Controllers', [])
    .controller('OccasionController', ['$scope', 'Occasions', function ($scope, Occasions) {

        console.log('In OccasionController');

        $scope.occasionData = {
            occasionsList: []
        };

        Occasions.list({}, function (data) {
            $scope.occasionData.occasionsList = data.result;
        });

    }])    
    .controller('DrinkResultsController', ['$scope', '$routeParams', 'Drinks', function ($scope, $routeParams, Drinks) {

        console.log('In DrinkResultsController');

        $scope.filter = $routeParams.filter;
        $scope.id = $routeParams.id;
                
        $scope.drinkData = {
            drinksList: []
        };

        Drinks.list({
            filter: $scope.filter,
            id: $scope.id
        }, function (data) {
            $scope.drinkData.drinksList = data.result;
        });
        

    }])
    .controller('DrinkDetailController', ['$scope', '$routeParams', 'Drinks', function ($scope, $routeParams, Drinks) {

        console.log('DrinkDetailController');  

        $scope.id = $routeParams.id;

        $scope.drinkData = {
            drinkList: []
        };

        Drinks.byid({
            id: $scope.id
        }, function (data) {
            $scope.drinkData.drinksList = data.result;
        });
    }]);