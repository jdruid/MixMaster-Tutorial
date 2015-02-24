'use strict';

angular.module('MixMaster.Services', ['ngResource'])
    .factory('Occasions',
        function ($resource) {
            return $resource('https://addb.absolutdrinks.com/occasions/', {}, {
                list: { method: 'GET', params: { apiKey: '' } }
            });
    })
    .factory('DrinkResults', function ($resource) {
        
    })
    .factory('Drink', function ($resource) {
        
    })
    .value('version', '0.1');


