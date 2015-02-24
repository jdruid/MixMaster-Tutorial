'use strict';

angular.module('MixMaster.Controllers', [])
    .controller('OccasionController', ['$scope', 'Occasions', function ($scope, Occasions) {

        console.log('OccasionController');

        $scope.occasionData = {
            occasionsList: []
        };

        Occasions.list({}, function (data) {
            $scope.occasionData.occasionsList = data.result;
        });


    }])    
    .controller('DrinkResultsController', ['$scope', '$routeParams', 'Drinks', function ($scope, $routeParams, Drinks) {

        console.log('DrinkResultsController');
        

    }])
    .controller('DrinkDetailController', ['$scope', '$routeParams', 'Drink', function ($scope, $routeParams, Drink) {

        console.log('DrinkDetailController');  

    }]);